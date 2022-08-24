import { useNavigate } from "react-router-dom"

type GameItemProps = {
    id: number
}

export default function GameItem(props: GameItemProps) {

    const { id } = props
    const navigate = useNavigate()

  return (
    <div>GameItem</div>
    /* Game code should go here??? */
  )
}
