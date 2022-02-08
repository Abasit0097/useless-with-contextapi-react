import './App.css';
import { ContextProvider } from './context/contextAPI';
import { Details } from './components/balance'

function App() {
  return (
    <ContextProvider>
          UseLess Minting Dapp
        <Details/>
    </ContextProvider>
  );
}

export default App;
