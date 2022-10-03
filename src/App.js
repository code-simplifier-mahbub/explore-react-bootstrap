
import './App.css';
import Utilities from './component/Utilities/Utilities';
import Accordian from './component/Accordian/Accordian';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Utilities></Utilities>
      <Accordian></Accordian>
      <Button>Gesire Help Kor Tora Kew</Button>
      <Button>Tora kew Help korli na...</Button>
      
    </div>
  );
}

export default App;
