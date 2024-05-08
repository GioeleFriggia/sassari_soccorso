import React from "react";

function SignIn() {
  return (
    <div className="container mt-5">
      <h2>Registati</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            aria-describedby="firstNameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLastName" className="form-label">
            Cognome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            aria-describedby="lastNameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDateOfBirth" className="form-label">
            Data di Nascita
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputDateOfBirth"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputResidence" className="form-label">
            Residenza
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputResidence"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCity" className="form-label">
            Città di Residenza
          </label>
          <input type="text" className="form-control" id="exampleInputCity" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCity" className="form-label">
            Numero di tessera
          </label>
          <input type="text" className="form-control" id="exampleInputCity" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Indirizzo Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignIn;
