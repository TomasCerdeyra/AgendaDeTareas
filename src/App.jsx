import logo from './assets/freecodecamp-logo.png'
import './App.css'
import Tareas from './componentes/Tareas'
import ListaDeTareas from './componentes/ListaDeTareas'

function App() {
  return (
    <div className="App">
      <div className='cont-img'>
        {/* <img src={logo} alt='logo' /> */}
      </div>
      <main className='lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </main>
    </div>
  )
}


export default App
