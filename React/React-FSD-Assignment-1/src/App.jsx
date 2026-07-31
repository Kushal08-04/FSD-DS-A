import React from 'react'
import Header from './components/Header'
import Content from './components/MainContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}



export default App