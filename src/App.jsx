import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'

function login() {
  return <Login />
}


function Register() {
  return <h1>Register</h1>
}


function Home() {
  return <h1>Home</h1>
}



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App