import { useState, useEffect, useCallback } from 'react'
import { getData } from './utils/api'

function App() {
  const [pet, setPet] = useState('')

  const fetchData = useCallback(async () => {
    const petData = await getData('pet')
    setPet(petData.message)
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="flex flex-col justify-around items-stretch font-sans text-center h-screen bg-light2">
      <header className="grow-0 h-32 pr-5 text-5xl bg-dark text-accent1 pt-6">
        TailwindCSS and TDD
      </header>
      <main className="grow flex flex-col">
        <div className=" mx-auto h-[20vh] p-2">
          <img
            className="object-contain h-full rounded-full"
            src={`${pet}`}
            alt="random dog"
          />
        </div>
        <div className="grow bg-accent1">Text</div>
      </main>
    </div>
  )
}

export default App
