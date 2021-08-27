import './App.css';
import './bootstrap.css'
import Cor from './components/Cor';
import sliderData from './components/slider';

function App() {
  return (
    <>
    <Cor slides={sliderData}/>
    </>
  );
}
export default App;
