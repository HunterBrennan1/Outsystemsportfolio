import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bentoContainer from './components/bentoContainer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<bentoContainer />}></Route>
    </Routes>
  );
}

export default App;
