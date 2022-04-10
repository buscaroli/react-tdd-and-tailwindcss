import React, { useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

function Header({ title, bitcoin }) {
  const [light, setLight] = useState(true)

  const renderIcon = () => {
    return light ? (
      <SunIcon data-testid="sunicon" />
    ) : (
      <MoonIcon data-testid="moonicon" />
    )
  }

  const toggleTheme = () => {
    light ? setLight(false) : setLight(true)
  }

  return (
    <div className="flex grow-0 h-32  bg-dark">
      <h1 className="grow text-5xl pt-6 ">{title}</h1>
      <div
        data-testid="header-widgets"
        className="flex flex-col items-center justify-evenly bg-accent1 w-24"
      >
        <div
          data-testid="header-theme"
          onClick={toggleTheme}
          className="w-10 h-10 border-2 p-1 rounded-full"
        >
          {renderIcon()}
        </div>
        <div data-testid="header-bitcoin" className="text-xl">
          1BTC £{bitcoin}
        </div>
      </div>
    </div>
  )
}

export default Header
