import './App.css';
import { ContextProvider } from './context/contextAPI';
import { Details } from './components/balance'
import { AddTransaction } from './components/addTrax'
//import BuyTrx from './context/write';

function App() {
  return (
    <ContextProvider >
          UseLess Minting Dapp
          <Details/>
        <AddTransaction/>
    </ContextProvider>
  );
}

export default App;
