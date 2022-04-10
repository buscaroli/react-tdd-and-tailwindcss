import { useState, useEffect, useCallback } from 'react'
import { getData } from './utils/api'
import Header from './components/Header'
import Pet from './components/Pet'
import Joke from './components/Joke'

function App() {
  const [pet, setPet] = useState('')
  const [joke, setJoke] = useState('')
  const [coin, setCoin] = useState('')

  const fetchPetData = useCallback(async () => {
    const petData = await getData('pet')
    setPet(petData.message)
  }, [])

  const fetchJokeData = useCallback(async () => {
    const jokeData = await getData('joke')
    setJoke(jokeData.joke)
  }, [])

  const fetchCoinData = useCallback(async () => {
    const coinData = await getData('coin')
    // console.log('coin is: ', coinData.bitcoin.gbp)
    setCoin(coinData.bitcoin.gbp)
  }, [])

  useEffect(() => {
    fetchPetData()
  }, [fetchPetData])

  useEffect(() => {
    fetchJokeData()
  }, [fetchJokeData])

  useEffect(() => {
    fetchCoinData()
  }, [fetchCoinData])

  return (
    <div
      data-testid="container"
      className="flex flex-col justify-around items-stretch font-sans text-center h-screen bg-light2"
    >
      <Header title="TailwindCSS and TDD" bitcoin={coin} />
      <main className="grow flex flex-col">
        <Pet pet={pet} />
        <Joke joke={joke} />
      </main>
    </div>
  )
}

export default App
