import AllRoutes from './router/AllRoutes'
import React from 'react'
import { Header,Footer } from './components'
import './index.css'
const App = () => {
  return (
    <div className='App'>
      <Header />
      <AllRoutes/>
      <Footer />
    </div>
  )
}

export default App

