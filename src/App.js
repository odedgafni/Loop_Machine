import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pad from './components/Pad';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">

        </div>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <Pad/>
          </div>
          <div className="col-4">
            <Pad/>
          </div>
          <div className="col-4">
            <Pad/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
