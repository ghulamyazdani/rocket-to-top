import React from 'react'
import './Check.scss'
export default function Check(props:any) {
    console.log(props);
  return (
    <div>Your package is woring{props.name}</div>
  )
}
