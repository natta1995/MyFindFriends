import { useState } from "react";
import { handleRegister } from "../Functions/ConnectToDB/FirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await handleRegister(email, password, fullname, city);

    if (user) {
      setMessage("Kontot skapades! Du skickas till login...");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-symbol">🫶</div>

        <h1>Skapa konto</h1>
        <p className="auth-text">
          Börja hitta nya vänner och hjälp kampen emot ensamhet.
        </p>

        {message && <p className="auth-success">{message}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Namn"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="Stad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button className="auth-button" type="submit">
            Skapa konto
          </button>
        </form>

        <p className="auth-link-text">
          Har du redan ett konto? <Link to="/">Logga in</Link>
        </p>
      </section>
    </main>
  );
};

export default Register;