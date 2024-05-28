import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa";
import "../css/UserList.css"; // Import the CSS file for styling

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState({
    show: false,
    userId: null,
  });

  const fetchUsers = async (page = 0, size = 100) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        setError("No token found. Please log in.");
        return;
      }

      const response = await axios.get("http://localhost:8080/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          size,
        },
      });

      if (response.status === 200) {
        const fetchedUsers = response.data.content || [];
        setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
        if (!response.data.last) {
          fetchUsers(page + 1, size);
        }
      } else {
        console.error("Errore nel recuperare la lista degli utenti");
        setError("Errore nel recuperare la lista degli utenti");
      }
    } catch (error) {
      console.error("Errore nel recuperare la lista degli utenti:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      setError("Errore nel recuperare la lista degli utenti");
      setUsers([]); // Set users to an empty array on error
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const loadLogo = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  };

  const generatePDF = async (doc, user) => {
    try {
      const logo = await loadLogo("logo2.png");

      doc.addImage(logo, "PNG", 10, 10, 30, 30); // Adjust the size and position as needed

      doc.setFontSize(20);
      doc.setTextColor(255, 165, 0); // Orange color
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.text("User Details", pageWidth / 2, 50, { align: "center" });

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0); // Black color
      doc.text(`Nome: ${user.name}`, 10, 70);
      doc.text(`Cognome: ${user.surname}`, 10, 80);
      doc.text(`Email: ${user.email}`, 10, 90);
      doc.text(`Città: ${user.city}`, 10, 100);
      doc.text(`Residenza: ${user.residence}`, 10, 110);
      doc.text(`Data di nascita: ${user.birthdate}`, 10, 120);
      doc.text(`Ruolo: ${user.role === "ADMIN" ? "Admin" : "User"}`, 10, 130); // Update role line
    } catch (error) {
      console.error("Errore nella generazione del PDF:", error);
    }
  };

  const downloadPDF = async (user) => {
    const doc = new jsPDF();
    await generatePDF(doc, user);
    doc.save(`user_${user.id}.pdf`);
  };

  const downloadAllPDFs = async () => {
    if (users.length === 0) {
      console.error("Nessun utente da scaricare");
      return;
    }

    const doc = new jsPDF();

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (i > 0) {
        doc.addPage();
      }
      await generatePDF(doc, user);
    }

    doc.save("all_users.pdf");
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
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
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

  return (
    <div className="user-list-container">
      <h1>Lista degli Utenti</h1>
      {error && <p className="error">{error}</p>}
      <button
        onClick={downloadAllPDFs}
        style={{ marginBottom: "20px", backgroundColor: "red" }}
      >
        Scarica tutti gli Utenti
      </button>
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
              <th>Ruolo</th> {/* New column for role */}
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
                <td>{user.role === "ADMIN" ? "Admin" : "User"}</td>{" "}
                {/* Update role line */}
                <td>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="delete-button"
                  >
                    Cancella
                  </button>
                  <button
                    onClick={() => downloadPDF(user)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    <FaFilePdf size={24} color="red" />
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
