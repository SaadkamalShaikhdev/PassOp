import { useState } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='min-h-[calc(100vh-116px)]'>
      <Toaster position="top-right" />
    <Manager />

    </div>
    <Footer />
    </>
  )
}

export default App
