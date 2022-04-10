import { useState, useEffect, useCallback } from 'react'
import { getData } from './utils/api'
import Header from './components/Header'
import Pet from './components/Pet'
import Joke from './components/Joke'

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
    <div
      data-testid="container"
      className="flex flex-col justify-around items-stretch font-sans text-center h-screen bg-light2"
    >
      <Header title="TailwindCSS and TDD" />
      <main className="grow flex flex-col">
        <Pet pet={pet} />
        <Joke />
      </main>
    </div>
  )
}

export default App
