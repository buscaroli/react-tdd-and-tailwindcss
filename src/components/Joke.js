import React from 'react'

function Joke({ joke }) {
  return (
    <div className="flex justify-stretch text-center flex-col grow bg-accent1">
      <h3 className="grow-0 h-16 text-2xl pt-4 bg-dark">A Random Joke</h3>
      <p data-testid="joketext" className="grow text-2xl p-4">
        {joke}
      </p>
    </div>
  )
}

export default Joke
