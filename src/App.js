import Personal from './components/Personal';
import Address from './components/Address';
import Workex from './components/Workex';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  const personalData = localStorage.getItem('personalData');

  return (
    <div className="App">
      <>
        <div className="bg-sky-200 h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Personal/>}/>
            <Route path="/Address" element={<Address/>}/>
            <Route path="/Workex" element={<Workex/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </div>
      </>
    </div>
  );
}


function NotFound () {
  return (
    <main>
      <h2>Why are you here?</h2>
    </main>
  )
}

export default App;
