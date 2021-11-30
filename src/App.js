import './App.css';
import CountdownTimer from './components/countdownTimer/countdownTimer';

function App() {
  return (
    <div className="App">
      <CountdownTimer countdownTimestamp={1638291380} />
    </div>
  );
}

export default App;
