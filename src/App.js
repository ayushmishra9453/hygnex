import logo from './logo.svg';
import Navbar from './components/Navbar';
import Path from './components/Path';
import Body from './components/Body';
import Form from './components/Form';

function App() {
  return (
    <div className="App w-full px-28  min-h-screen relative">
     <Navbar/>
  
     <Body/>
     <Form/>
    </div>
  );
}

export default App;
