import './App.css';
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
import Signup from './screens/Signup';
   
  
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
                  <Route exact path="/" element={<Addtask/>}> </Route>

                  <Route exact path="/showtask" element={<Showtask/>}> </Route>
                </Routes>
              </div>
            </Router>
        </div>
                 
  );
}

export default App;