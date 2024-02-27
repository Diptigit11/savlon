import './App.css';
import Signup from './screens/Signup';

import Main from './screens/Main'

import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Showtask from './components/Showtask';
import Addtask from './components/Addtask';
import NoteState from './context/notes/NoteState';
import Home from './screens/Home'
   
  
function App() {
  return (  
          // <Router>
          // <Routes >
          //     {/* <Route exact path="/" element= {<Showtask/>}> </Route> */}
          //     <Route exact path="/" element= {<Addtask/>}> </Route>
          //     </Routes>
          //     </Router>

          <div className="">
            <Router>
              <div className="container">
                <Routes >
                  <Route exact path="/" element={<Home/>}> </Route>
                  <Route exact path="/login" element={<Login/>}> </Route>
                  <Route exact path="/signup" element={<Signup/>}> </Route>
                  <Route exact path="/Main" element={<Main/>}> </Route>
                  <Route exact path="/Showtask" element={<Showtask/>}> </Route>
                  {/* <Route exact path="/login || /signup" element={<Main/>}> </Route> */}

                </Routes>
              </div>
            </Router>
        </div>
                 
  );
}

export default App;