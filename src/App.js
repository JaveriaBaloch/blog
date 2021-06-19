import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import FOOTER from './Footer'
class App extends Component{
  render(){
    return(
<div>
  
<Navbar />
 
 <Header />
<Body />
  
 

  <hr />

 <FOOTER />
</div>
    );
  }

}

export default App;
