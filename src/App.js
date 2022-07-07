import './App.css';
import videoclub from './peliculas'
import Cabecera from './Cabecera';
import Main from './Main';
import Footer from './Footer';

function App() {

  return (
    <div className = "wrapper">
      <Cabecera />
      <Main pelis={videoclub.peliculas}/>
      <Footer />
    </div>
  );
}

export default App;
