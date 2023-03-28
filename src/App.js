import './App.css';
import First from './fstpg/First';
import Navbar from './Navbar/Navbar';
import Service from './seervice/Service';
import Support from './support/Support';
import Text from './textsevice/Text';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <First/>
        <Text/>
        <Service/>
        <Support/>
    </div>
  );
}

export default App;
