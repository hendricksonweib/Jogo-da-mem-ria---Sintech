import './App.css'
import Menu from './components/template/Menu'
import GameOver from './components/template/GameOver'
import UserBoard from './components/template/UserBoard'

function App() {

  return (
    <>
      <div className="app-conteiner">
          {/* <Menu /> */}
          <UserBoard/>
          {/* <GameOver/> */}
      </div>
    </>
  )
}

export default App
