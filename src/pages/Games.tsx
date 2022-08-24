import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"

import style from './Game.module.css'

export default function Games() {

  const { user } = useContext(UserContext)
  
  if (!user) {
    return <Navigate to='/login' replace />
  }
  
  return (
    <div className={style.container}>

    </div>
  )
}