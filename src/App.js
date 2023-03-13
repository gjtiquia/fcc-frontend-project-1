import AppFooter from './AppFooter';
import QuoteBox from './QuoteBox';
import AppHeader from './AppHeader';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />

      <main>
        <QuoteBox />
      </main>

      <AppFooter />
    </div>
  );
}

export default App;
