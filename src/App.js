import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Machine</h1>
      </header>

      <main>
        <div id='quote-box'>
          <p id='text'>The quote which is something quite long something quite long something quite long something quite long.</p>
          <p id='author'>The author</p>
          <button id='new-quote'>New Quote</button>
          <a id='tweet-quote' href='https://twitter.com/intent/tweet'>
            <img alt="Tweet Quote" src='./twitter.svg'></img>
          </a>
        </div>
      </main>

      <footer>
        <a id='github-link' href="https://github.com/gjtiquia/fcc-frontend-project-1">
          <img alt="GitHub link" src='./github.svg'></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
