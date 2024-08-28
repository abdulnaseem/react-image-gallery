import './App.css';
import DATA from './data/image-gallery.json';
import Gallery from './components/Gallery/Gallery';


function App() {

  return (
    <div className="App">
      <Gallery data={DATA} />
    </div>
  );
}

export default App;
