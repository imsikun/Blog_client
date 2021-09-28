import React from 'react'
import TopBar from './components/topbar/TopBar'
// import Single from './pages/single/Single'
import Write from './pages/write/Write'
// import Home from './pages/Home/Home'

function App () {
  return (
    <div className='App'>
      <TopBar />
      {/* <Single/> */}
      <Write/>
    </div>
  )
}

export default App
