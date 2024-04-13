import { useState } from 'react'
import './App.css'
import { Home } from './components/Home/Home';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <div className={isDarkMode ? 'darkMode' : 'lighMode'}>
      <button className='DisplayToggle' onClick={handleDarkMode}>
          
      </button>
        <Home />
      </div>
    </>
  );
};

export default App;