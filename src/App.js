
import './App.css';
import Home from '/home/raju/Desktop/Todo list app/client/src/pages/Home.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
