
import {NavBar} from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido a Nuestra Tienda Virtual'} />
    </div>
  );
}

export default App;
