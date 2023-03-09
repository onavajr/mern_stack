import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListAll from './components/ListAll';
import New from './components/New';
import Edit from './components/Edit';
import Details from './components/Details';

import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ListAll path = "/karoke" />
        <New path = "/karaoke/new" />
        <Edit path = "/karaoke/:id/edit" />
        <Details path = "/karaoke/:id" />
      </Router>
      
    </div>
  );
}

export default App;
