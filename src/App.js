import './App.css';
import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import ContextProvider from './ContextProvider/ContextProvider';

function App() {
  const [viewNav, setViewNav] = useState(false)
  return (
    <div className='josefin-sans-normal'>
      <ContextProvider.Provider value={{
        viewNav,
        setViewNav
      }}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
        </Routes>
      </ContextProvider.Provider>
    </div>
    
  );
}

export default App;
