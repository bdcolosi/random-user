import React from 'react';
import './App.css';
import RandomUser from './components/user';
import { Box, Columns, Column, Notification } from 'bloomer';
import "bulma/css/bulma.css";


function App() {
  return (
    <div className="App">
     <h1>Random User</h1>
     <div>
       <Box>
       <Columns>
       <Column>
       <RandomUser/>
       </Column>
       <Column>
       <RandomUser/>
       </Column>
       <Column>
       <RandomUser/>   
       </Column>
       <Column>
       <RandomUser/>
       </Column>
    </Columns>
    </Box>
    <Box>
       <Columns>
       <Column>
       <RandomUser/>
       </Column>
       <Column>
       <RandomUser/>
       </Column>
       <Column>
       <RandomUser/>   
       </Column>
       <Column>
       <RandomUser/>
       </Column>
    </Columns>
    </Box>
    <Box>
       <Columns>
       <Column>
       <RandomUser/>
       </Column>
       <Column>
       <RandomUser/>
       </Column>
       <Column>
       <RandomUser/>   
       </Column>
       <Column>
       <RandomUser/>
       </Column>
    </Columns>
    </Box>
     </div>
    </div>
  );
}

export default App;
