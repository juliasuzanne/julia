import axios from "axios";
import { useState } from "react";

export function EmailForm() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setErrors([]);
    axios
      .post("https://ecrebocpremail.fly.dev/contact_form", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((errors) => {
        console.log(errors.response);
        setErrors(["Invalid - not sent"]);
      });
  };

  return (
    <div id="login">
      <h1>Contact Us</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          E-mail:
          <input name="email" className="form-control" type="email" />
        </div>
        <div>
          First Name:
          <input name="name" className="form-control" type="string" />
        </div>
        <div>
          Last Name:
          <input name="last_name" className="form-control" type="string" />
        </div>
        <div>
          Message:
          <input name="message" className="form-control" type="text" />
        </div>

        <button className="btn btn-secondary mt-3 submit">Submit</button>
      </form>
    </div>
  );
}
