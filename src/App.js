import './App.css';
// import Home from './Components/Home';
import List from './Components/List';
import CreateList from './Components/CreateList';
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import Form from './Components/Form';
import Operation from './Components/Operation';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Operation/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/createList' element={<CreateList/>}>
        </Route>
      </Routes>
    </BrowserRouter> 
    
  );
}

export default App;
