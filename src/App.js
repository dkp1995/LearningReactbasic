import './App.css';

import Home from './components/home'
import Imgsearch from './components/imgsearch'
import Error from './components/error'
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Newad from './components/Newad'
import Learncss from './components/learncss'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (

    <>
    
    

    <div>


    <BrowserRouter>

    <Searchbar />
    <Navbar />

      <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/img' component={Imgsearch}/>
            <Route path='/new' component={Newad}/>
            <Route path='/learncss' component={Learncss}/>
            <Route component={Error }/>

        </Switch>
      
    </BrowserRouter>
      
      
      
    </div>
      
     
      

    </>

  );
}

export default App;
