import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context"

import style from './Home.module.css'

export default function Home() {

  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [boardSize, setBoardSize] = useState('')

  const handleButton = () => {
    if (!user) {
      navigate('/login')
    }
    return (
      navigate(`game/${boardSize}`)
    )
  }

  return (
    <div className={style.container}>
      <select 
        className={style.select} 
        onChange={(e) => setBoardSize(e.target.value)}
      >
        <option defaultChecked selected disabled>Board Size</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
        <option value={13}>13</option>
        <option value={14}>14</option>
        <option value={15}>15</option>
        <option value={16}>16</option>
        <option value={17}>17</option>
        <option value={18}>18</option>
        <option value={19}>19</option>
      </select>
      <button className={style.button} onClick={handleButton}>Start</button>
    </div>
  )
}
