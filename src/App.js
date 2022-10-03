
import './App.css';
import Utilities from './component/Utilities/Utilities';
import Accordian from './component/Accordian/Accordian';
import { Button } from 'react-bootstrap';
import Loading from './component/Loading/Loading';


function App() {
  return (
    <div className="App">
      <Utilities></Utilities>
      <Accordian></Accordian>
      <Button>Gesire Help Kor Tora Kew</Button>
      <Button>Tora kew Help korli na...</Button>
      <Loading></Loading>
    </div>
  );
}

export default App;
