import Personal from './components/Personal';
import Address from './components/Address';
import Workex from './components/Workex';
import Home from './components/Home';
import {Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <>
        <div className="bg-slate-200 h-screen flex items-center justify-center">
          <div className="w-3/4 h-3/4 flex items-center justify-center shadow-xl">
            <div className="h-full w-1/2">
              <img className="h-full w-full" src="https://images.pexels.com/photos/1289672/pexels-photo-1289672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            </div>           
            <div className="h-full w-1/2">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Personal" element={<Personal/>}/>
                <Route path="/Address" element={<Address/>}/>
                <Route path="/Workex" element={<Workex/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </div>
          </div>
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
