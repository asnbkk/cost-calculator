import './App.css';
import { Calculator, Header } from './components';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <Header />
      <GlobalProvider>
        <Calculator />
      </GlobalProvider>
    </>
  );
}

export default App;
