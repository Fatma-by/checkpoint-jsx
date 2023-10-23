import React from 'react'

function FirstName(props) {
    console.log(props)
  return (
    <div>bonjour{props.props}</div>
  )
}

export default FirstName