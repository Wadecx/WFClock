import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Clock/>
    </div>
  );
}

export default App;
