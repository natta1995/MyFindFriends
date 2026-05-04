
import HomePage from './Pages/Homepage'
import FriendFeed from './Pages/FriendFeed'

import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';



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