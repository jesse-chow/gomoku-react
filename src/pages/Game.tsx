import { useContext, useState } from "react"
import { UserContext } from "../context"
import { useNavigate, useParams } from "react-router-dom"
import GameLogic from "../components/GameLogic"

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
    navigate('/login')
  }





  return (
    <div>
      Game

      {/* <Game>

        const game = new Game(size)
        game.initialise()
      </Game> */}


    </div>
  )
}
