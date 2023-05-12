import { AuthProvider } from "../context/AuthCotext";
import Dashbord from "./Dashbord";
import Login from "./Login";
import SignUp from "./SignUp";
import Privatecomp from "./Privatecomp";
import Forget from "./Forget";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
function App() {


  return (
    <div className="d-flex align-item-center justify-content-center " style={{minHeight:"100vh"}}>
      <div className="w-100" style={{maxWidth:'400px'}}>
      <Router>
        <AuthProvider>
          <Switch>

            <Privatecomp exact path="/" component={Dashbord}/>
            <Route path="/SignUp"  component={SignUp}/>
            <Route path="/login" component={ Login }/>
            <Route path="/Forget" component={ Forget }/>

          </Switch>
        </AuthProvider>
      </Router>
    
      </div>
 
    </div>
  );
}

export default App;
