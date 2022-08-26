import { useContext, useState, useReducer } from "react"
import { UserContext } from "../context"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useLocalStorage } from "../hooks"
import { Stone } from "../components"

import style from './Game.module.css'
import { PlayStoneActionType, STATUS } from "../constants"

type PlayStoneAction = {
  type: PlayStoneActionType
  payload: number
}

function playStoneReducer(state: number[], action: PlayStoneAction) {
  const { type, payload } = action
  switch (type) {
    case PlayStoneActionType.BLACK:
      return [...state, payload]
    case PlayStoneActionType.WHITE:
      return [...state, payload]
    default:
      return state
  }
}

export default function Game() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const gameInfo = useParams()
  const boardSize = gameInfo.size
  const gameId = gameInfo.id
  const [gameState, setGameState] = useState(true)
  const [turnCounter, setTurnCounter] = useState(0)
  const [gameLog, saveGameLog] = useLocalStorage<Record<string, number[]>>(
    `gameLog`,
    {}
  )
  const playedStones = gameLog[`game-${gameId}`] || []
  const [state, dispatch] = useReducer(playStoneReducer, playedStones)


  if (!user) {
    return <Navigate to='/login' replace />
  }
  if (!boardSize) {
    return null
  }
  if (!gameId) {
    return null
  }
  const rows = parseInt(boardSize)
  const columns = parseInt(boardSize)
  
  const gameStatusMessage = () => {
    if (turnCounter >= rows*columns) {
      return <h1 className={style.gameStatusGameOver}>Game Over: Draw!</h1>
    }
    if (gameState === true) {
      if (turnCounter % 2 === 0) {
        return <h1 className={style.gameStatusBlack}>Current Player: Black</h1>
      }
      else if (turnCounter % 2 === 1) {
        return <h1 className={style.gameStatusWhite}>Current Player: White</h1>
      }
    }
  }

  const handleGameState = () => {
    if (turnCounter > rows*columns) {
      setGameState(false)
    }
  }

  const handleRestartButton = () => {

  }

  const handleLeaveButton = () => {
    if (gameState === true) {
      navigate('/')
    }
    saveGameLog({ ...gameLog, [`game-${gameId}`]: state })
    navigate('/games')
  }

  return (
    <div className={style.container}>
      {gameStatusMessage()}

      <div className={style.gameBoard} style={{ gridTemplateColumns: `repeat(${rows}, 1fr)`}}>
        {[...Array(rows * columns)].map((_, index) => (
          <Stone
            key = {`stone-${index}`}
            id = {index}
            status = {STATUS.EMPTY}
            turnCounter = {turnCounter}
            playBlack = {() => dispatch({ type: PlayStoneActionType.BLACK, payload: index})}
            playWhite = {() => dispatch({ type: PlayStoneActionType.WHITE, payload: index})}
            updateGameState = {() => {
              setTurnCounter(turnCounter + 1)
              handleGameState()
            }}
          />
        ))}
      </div>

      <div className={style.buttonContainer}>
        <button className={style.restart} onClick={handleRestartButton}>Restart</button>
        <button className={style.leave} onClick={handleLeaveButton}>Leave</button>
      </div>

    </div>
  )
}
