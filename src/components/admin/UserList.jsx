import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/UserList.css"; // Import the CSS file for styling

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState({
    show: false,
    userId: null,
  });

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await axios.get("http://localhost:8080/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const users = response.data.content || []; // Ensure users is an array
        console.log("Lista utenti:", users);
        setUsers(users);
      } else {
        console.error("Errore nel recuperare la lista degli utenti");
        setError("Errore nel recuperare la lista degli utenti");
      }
    } catch (error) {
      console.error("Errore nel recuperare la lista degli utenti:", error);
      setError("Errore nel recuperare la lista degli utenti");
      setUsers([]); // Set users to an empty array on error
    }
  };

  const deleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await axios.delete(
        `http://localhost:8080/admin/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        setConfirmDelete({ show: false, userId: null }); // Close the confirmation dialog
      } else {
        console.error("Errore nella cancellazione dell'utente");
        setError("Errore nella cancellazione dell'utente");
      }
    } catch (error) {
      console.error("Errore nella cancellazione dell'utente:", error);
      setError("Errore nella cancellazione dell'utente");
    }
  };

  const handleDeleteClick = (userId) => {
    setConfirmDelete({ show: true, userId });
  };

  const handleConfirmDelete = () => {
    if (confirmDelete.userId !== null) {
      deleteUser(confirmDelete.userId);
    }
  };

  const handleCancelDelete = () => {
    setConfirmDelete({ show: false, userId: null });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h1>Lista degli Utenti</h1>
      {error && <p className="error">{error}</p>}
      {users.length === 0 ? (
        <p>Nessun utente trovato</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cognome</th>
              <th>Email</th>
              <th>Città</th>
              <th>Residenza</th>
              <th>Data di nascita</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.residence}</td>
                <td>{user.birthdate}</td>
                <td>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="delete-button"
                  >
                    Cancella
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {confirmDelete.show && (
        <div className="confirm-dialog">
          <p>Sei sicuro di voler cancellare questo utente?</p>
          <button onClick={handleConfirmDelete}>Sì</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
};

export default UserList;
