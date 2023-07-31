import './App.css';
import ContextProvider from './Context/Context';
import MainNav from "./Files/Main/MainNav";
import MainBody from "./Files/Main/MainBody";

function App() {

  return (
    <main>
      <ContextProvider>
          <MainNav />
          <MainBody />
      </ContextProvider>
    </main>
  )
}

export default App
