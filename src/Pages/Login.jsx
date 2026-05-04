import { useState } from "react";
import { handleLogin } from "../Functions/ConnectToDB/FirebaseAuth";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    await handleLogin(email, password);
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-symbol">🫶</div>

        <h1>Välkommen tillbaka</h1>
        <p className="auth-text">
          Logga in och hitta människor nära dig som också vill ses.
        </p>

        <form className="auth-form" onSubmit={login}>
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

          <button className="auth-button" type="submit">
            Logga in
          </button>
        </form>

        <p className="auth-link-text">
          Har du inget konto? <Link to="/register">Registrera dig</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;