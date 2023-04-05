import logo from './logo.svg';
import './App.css';
import {BrowserRoute, Routes, Route, BrowserRouter} from 'react-router-dom';
import DisplayList from './components/DisplayList';
import Form from './components/Form';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/candies/create' element={<Form/>}/>
          <Route path='/candies' element={<DisplayList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
