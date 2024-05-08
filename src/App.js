import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function App() {
  const appStyle = {
    backgroundColor: 'black',
    padding:'10px',
  }

  return (
    <div className="App" style={appStyle} >
      <Sidebar />
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
