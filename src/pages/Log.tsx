import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context"

export default function Log() {

  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
  }
  
  return <div>Log</div>
}
