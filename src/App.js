import './App.css';
import Navbar from '../src/components/Navbar';
import Create from '../src/components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter, Route ,Routes} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    <Navbar />
        <Routes>
          
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
   </BrowserRouter>
  );
}

export default App;
