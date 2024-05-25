import './App.css'
import Menu from './components/template/Menu'
import GameOver from './components/template/GameOver'
import GameBoard from './components/template/GameBoard'
import UserBoard from './components/template/UserBoard'

function App() {

  return (
    <>
      <div className="app-conteiner">
          {/* <Menu /> */}
          {/* <UserBoard/> */}
          {/* <GameBoard/> */}
          <GameOver/>
      </div>
    </>
  )
}

export default App
