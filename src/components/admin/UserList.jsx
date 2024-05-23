import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista degli Utenti</h1>
      {error && <p>{error}</p>}
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
