import { useContext, useState } from "react"
import { UserContext } from "../context"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import style from './Game.module.css'

export default function Game() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const { size } = useParams()
  const [gameId, setGameId] = useState()
  


  function generateGameID() {
    return Math.floor(Math.random()*10000)
  }

  if (!user) {
    return <Navigate to='/login' replace />
  }

  // const gameId = setGameId(generateGameID)



  return (
    <div className={style.container}>
      

      {/* <GameLogic>

        const game = new Game(size)
        game.initialise()
      </GameLogic> */}


    </div>
  )
}
