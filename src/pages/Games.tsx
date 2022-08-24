import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context"


import style from './Game.module.css'

export default function Games() {

  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  
  if (!user) {
    navigate('/login')
  }
  
  return (
    <div className={style.container}>



    </div>
  )
}