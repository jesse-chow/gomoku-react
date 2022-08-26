import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { UserContext } from "../context"
import { useLocalStorage } from '../hooks'

import style from './Games.module.css'

export default function Games() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const [savedGames] = useLocalStorage<Record<string, number[]>>('gameLog', {})
  
  if (!user) {
    return <Navigate to='/login' replace />
  }
  
  return (
    <div className={style.container}>
      <h1 className={style.header}>
        You have {Object.keys(savedGames).length} saved games
      </h1>

      {Object.keys(savedGames).map((key) => {
        const gameInfo = key.split('-')[1]
        const gameId = parseInt(gameInfo)
        if (!gameId) return null
        const numberPlayedStones = savedGames[key].length
        if (numberPlayedStones === 0) return null
        return (
          <div className={style.list} key={key}>
            <p className={style.title}>
              Game ID: {gameId} 
            </p>

            <button
              className={style.button}
              onClick={() => navigate(`/game-log/${gameId}`)}
            >
              View Game Log
            </button>
          </div>
        )
      })}

    </div>
  )
}