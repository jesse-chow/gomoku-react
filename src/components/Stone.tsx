import { useState } from 'react'
import { STATUS } from '../constants'

import style from './Stone.module.css'

type StoneProps = {
  id: number
  turnCounter: number
  status: STATUS
  updateGameState: () => void
  playBlack: () => void
  playWhite: () => void
}

export default function Stone(props: StoneProps) {
  const { id, turnCounter, updateGameState, playBlack, playWhite } = props
  const [status, setStatus] = useState(STATUS.EMPTY)

  const getClassNames = () => {
    const className = style.stone
    switch (status) {
      case STATUS.EMPTY:
        return `${className} ${style.empty}`
      case STATUS.BLACK:
        return `${className} ${style.black}`
      case STATUS.WHITE:
        return `${className} ${style.white}`
      default:
        return className
    }
  }

  const handleClick = () => {
    if (status === STATUS.EMPTY && turnCounter % 2 === 0) {
      setStatus(STATUS.BLACK)
      playBlack()
      updateGameState()
    }
    else if (status === STATUS.EMPTY && turnCounter % 2 === 1) {
      setStatus(STATUS.WHITE)
      playWhite()
      updateGameState()
    }
  }
  
  return (
    <div 
      className={getClassNames()}
      onClick={handleClick}>
    </div>
  )
}
