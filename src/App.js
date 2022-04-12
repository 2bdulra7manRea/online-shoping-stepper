import './App.css';
import Home from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense} from 'react';
function App() {
  return (
  <div className='App'>
    <Suspense fallback={<p>loading...</p>}>
        <Home/> 
    </Suspense>
  </div>
  );
}

export default App;
