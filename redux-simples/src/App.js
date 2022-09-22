import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className="linha">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="linha">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;