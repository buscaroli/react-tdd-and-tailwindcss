import React from 'react'

function Header({ title }) {
  return (
    <h1 className="grow-0 h-32 pr-5 text-5xl bg-dark text-accent1 pt-6">
      {title}
    </h1>
  )
}

export default Header
