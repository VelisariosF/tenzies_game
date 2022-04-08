import logo from './logo.svg';
import './App.css';

function App() {
  const [dices, setDices] = React.useState([])
  return (
  <main>
    <h1 className='title'>Tenzies</h1>
    <h2 className='subtitle'>Roll untill all dice are same. Click each dice to freeze 
    it at its current value between rolls</h2>
    {dices}
    <button className='roll'>Roll</button>
  </main>
  );
}

export default App;
