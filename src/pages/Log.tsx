import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"

export default function Log() {
  const { user } = useContext(UserContext)
  if (!user) {
    return <Navigate to='/login' replace />
  }
  return <div>Log</div>
}
