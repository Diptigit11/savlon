import { Dashboard } from '../components/Dashboard';
import Header from '../components/Header';
import Addtask from '../components/Addtask';
const Main = () => { 
    return (
        <div>
          <Header />
          <div className="flex">
            <Dashboard />
            <div className="flex-1">
              <Addtask />
            </div>
          </div>
        </div>
      );
    }
    

export default Main;