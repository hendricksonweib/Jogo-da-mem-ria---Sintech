import './App.css'
import Menu from './components/template/Menu'
import GameOver from './components/template/GameOver'
import GameBoard from './components/template/GameBoard'

function App() {

  return (
    <>
      <div className="app-conteiner">
          {/* <Menu /> */}
          {/* <GameOver/> */}
          <GameBoard/>
      </div>
    </>
  )
}

export default App
