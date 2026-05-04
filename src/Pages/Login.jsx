import { useState } from "react"
import { handleLogin } from "../Functions/ConnectToDB/FirebaseAuth"
import { useNavigate } from "react-router-dom"

	
const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()
	const login = async () => {
   await  handleLogin(email, password) 
   navigate("/home")}
  return(<div>
	  <h1>Home</h1>
	  <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
	  <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
	  <button onClick={login}>Login</button>
	

  </div> 
  )
}
export default Login