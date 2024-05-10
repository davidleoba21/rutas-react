
import './App.css';
import { CompClienteAgregar } from './Componentes/Clientes/CompClienteAgregar';
import { CompClienteMostrar } from './Componentes/Clientes/CompClienteMostrar';
//importamos router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Componentes/Header/Menu';
import { CompClienteMod } from './Componentes/Clientes/CompClienteMod';
import { Footer } from './Componentes/Footer/Footer';
function App() {
  return (
      <div className="App">
        <Menu/>
        <div className='App-header'>
        <BrowserRouter>
        <Routes>
          <Route path='/clientes' element = {<CompClienteMostrar/>}/>
          <Route path='/clientes/agregar' element = {<CompClienteAgregar/>}/>
          <Route path='/clientes/actualizar/:id' element = {<CompClienteMod/>}/>
        </Routes>
        </BrowserRouter>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
