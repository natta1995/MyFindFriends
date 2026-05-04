import { useState } from "react";
import { handleRegister } from "../Functions/ConnectToDB/FirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [fullname, setFullname] = useState("");
//   const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
const [fullname, setFullname] = useState("");
const [city, setCity] = useState("");
const [bio, setBio] = useState("");
const [age, setAge] = useState("");
const [ageSpan, setAgeSpan] = useState([0, 0]);
const [lonely, setLonely] = useState(false);
const [interests, setInterests] = useState([]);

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

  {/* Age */}
  <input
    type="number"
    placeholder="Ålder"
    value={age}
    onChange={(e) => setAge(e.target.value)}
  />

  {/* Bio */}
  <input
  type="text"
    placeholder="Beskriv dig själv"
    value={bio}
    onChange={(e) => setBio(e.target.value)}
  />

  

 {/* Interests */}
  <input
    type="text"
    placeholder="Lägg till intresse"
    onKeyDown={(e) => {
      if (e.key === "Enter" && e.target.value.trim() !== "") {
        e.preventDefault();
        setInterests([...interests, e.target.value]);
        e.target.value = "";
      }
    }}
  />

  <div>
    {interests.map((i, index) => (
      <span key={index}>
        {i}
        <button
          type="button"
          onClick={() =>
            setInterests(interests.filter((_, idx) => idx !== index))
          }
        >
          x
        </button>
      </span>
    ))}

  {/* Lonely */}
  <label>
    <input
      type="checkbox"
      checked={lonely}
      onChange={(e) => setLonely(e.target.checked)}
    />
    Känner mig ensam
  </label>
</div>

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