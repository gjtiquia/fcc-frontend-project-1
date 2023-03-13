import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Machine</h1>
      </header>

      <main>
        <div id='quote-box'>
          <p id='text'>The quote which is something quite long</p>
          <p id='author'>The author</p>
          <button id='new-quote'>New Quote</button>
          <a id='tweet-quote' href='twitter.com/intent/tweet'>Tweet</a>
        </div>
      </main>
    </div>
  );
}

export default App;
