enum STATUS {
  EMPTY = 'EMPTY',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export default class Stone {
  status: STATUS = STATUS.EMPTY
  element: HTMLDivElement

  constructor() {
    this.element = document.createElement('div')
    this.element.classList.add('stone')
  }

  get isBlack() {
    return this.status === STATUS.BLACK
  }

  get isWhite() {
    return this.status === STATUS.WHITE
  }

  get isEmpty() {
    return this.status === STATUS.EMPTY
  }

  placedByBlack() {
    if (this.status !== STATUS.EMPTY) return false
    this.status = STATUS.BLACK
    this.element.classList.add(this.status.toLowerCase())
    return true
  }

  placedByWhite() {
    if (this.status !== STATUS.EMPTY) return false
    this.status = STATUS.WHITE
    this.element.classList.add(this.status.toLowerCase())
    return true
  }
}
