import { useState } from 'react'

const UseConstructor = (callBack = () => {}) => {
  const [executed, setExecuted] = useState(false)

  if (executed) {
    return
  }

  callBack()
  setExecuted(true)
}

export default UseConstructor
