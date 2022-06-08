import Home from './Component/Home';
import './App.css';
import Crud from './Component/Crud';
import {Routes,Route} from 'react-router-dom';
import Table from './Component/Table';
function App() {
  return (
    <>
 <Home/>
 <Routes>
 {/* <Route path ="/" element={<Home/>}></Route> */}
 <Route path ="/crud" element={<Crud/>}></Route>
 <Route path ="/table" element={<Table/>}></Route>
 <Route path ="/edit/:id" element={<Crud/>}></Route>

 </Routes>
 </>
 
  );
}

export default App;
