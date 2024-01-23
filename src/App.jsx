import { useState } from 'react'
import './App.css'
import { Login } from './pages/Login/Login'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Dashboard } from './pages/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='parent'>
      <Dashboard/>
    </div>
  )
}

export default App
