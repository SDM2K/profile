import Header from '@components/Header'
import Landing from '@pages/landing'
import './App.scss'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='App-main'>
        <Landing />
      </main>
    </div>
  )
}

export default App
