import React, { useContext } from 'react'
import { UserContext } from '../Contaxt/UserContext'

export default function A() {
    let user=useContext(UserContext)

    console.log(user)
  return (
    <div>A={user}</div>
  )
}
