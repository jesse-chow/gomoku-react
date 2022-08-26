import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { UserContext } from "../context"
import { useLocalStorage } from "../hooks"

import style from "./Log.module.css"

export default function Log() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const [savedGames] = useLocalStorage<Record<string, number[]>>('gameLog', {})

  if (!user) {
    return <Navigate to='/login' replace />
  }
  
  return (
    <div className={style.container}>
      
      
      
      <button 
        className={style.button} 
        onClick={() => navigate(`/games`)}>
          Back
      </button>
    
    
    </div>
  )
}
