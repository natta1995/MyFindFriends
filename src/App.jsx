import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/Homepage'
import FriendFeed from './Pages/FriendFeed'


function login() {
  return <Login />
}


function Register() {
  return <h1>Register</h1>
}


function Home() {
  return <HomePage/>
}
function Feed() {
  return <FriendFeed/>
}



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/friend" element={<FriendFeed />} />

    </Routes>
  )
}

export default App