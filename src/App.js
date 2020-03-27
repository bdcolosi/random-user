import React from 'react';
import './App.css';
import RandomUser from './components/user';

function App() {
  return (
    <div className="App">
     <h1>Random User</h1>
     <div>
     <RandomUser/>
     <RandomUser/>
     <RandomUser/>
     <RandomUser/>
     <RandomUser/>
       </div> 
    </div>
  );
}

export default App;
