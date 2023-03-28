
import Nav from './view/nav/nav.js';
import './App.css';
import './view/grid.scss'
import { Outlet } from 'react-router-dom';



function App() {


  return (
    <div className="grid wide">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
