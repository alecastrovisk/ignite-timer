import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <h1>
      NewCycleForm: {activeCycle}{' '}
      <button onClick={() => setActiveCycle(2)}>Aterar ciclo ativo</button>
    </h1>
  )
}

function CountDown() {
  const { activeCycle } = useContext(CyclesContext)

  return <h1>{activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <CountDown />
      </div>
    </CyclesContext.Provider>
  )
}
