import logo from './logo.svg';
import './App.css';
import HocExample from './HocExample'
import Tutorials from './Tutorials'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Lodash from './lodash'
import Classtodo from './Classtodo'
import PropTypeExample from './Proptypeexample/PropTypeExample'
import Hookform from './HookForm'
import Hooklogin from './Hooklogin'
import Hookmembers from './Hookmembers'
import BindTest from'./BindTest'
import Hookhome from './Hookhome'
import Register from './Register'
import Login from './Login'
import SimpleCalender from './simpleCalender'
import Member from './Member'
import PrivateRoute from './ProtectedRouter'
import Assireg from './AssiLogin'
import Assilogin2 from './AssiLogin2'
import Assimember from './Assimember'
import AsiUserProfile from './AsiUserProfile'


function App() {
  return (
    <div className="App">
    
    

   
   
   
   

    

   
  
    <BrowserRouter>

    <Route exact path="/userprofile">
      <AsiUserProfile/>
           
          </Route>



    <Assilogin2/>
    <Assireg/>
     <PrivateRoute path="/member2">
    <Assimember/>

    </PrivateRoute>
    <Route path="/routerender" render={()=>{
      return(<h1>i came from render</h1>);

    }}>
    </Route>



   

    <PrivateRoute path="/member">
    <Member/>

    </PrivateRoute>





    <Link to='/Register2'>register Backend</Link>
    <Link to='/login2'>login Backend</Link>
     <Hookhome/>

     <Route exact path="/Register2">
      <Register/>
           
          </Route>
           <Route exact path="/login2">
       <Login/>
           
          </Route>
         
  

   
    
    </BrowserRouter>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
