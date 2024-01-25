import logo from './logo.svg';

import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import "./styles.css"

function App() {
  return (
    <div>
      <Header />

      <div className='players'>
        <Player player='X' />
        <Player player='O' />
      </div>

      <Board />
      <a href='https:www.google.com'>Click me</a>
    </div>
  );
}

export default App;
