import logo from './logo.svg';
import './App.css';
import {BrowserRoute, Routes, Route, BrowserRouter} from 'react-router-dom';
import DisplayList from './components/Display';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <BrowserRouter>

        <Routes>
          <Nav />
          <Route path='/candies/create' element={Form}/>
          <Route path='/candies' element={DisplayList}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
