import { useState } from 'react'
import Buttons from '../components/Button/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
        <Buttons children="Ver produto" variant='primary'/>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '304px', height: '500px', padding: '17px 13.51px 16px 12.39px', background: "black"}}>
          <Buttons children="Comprar" variant='buy' fullWidth={true}/>
        </div>
      </div>
    </>
  )
}

export default App
