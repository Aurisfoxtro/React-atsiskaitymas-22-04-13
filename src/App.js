import './App.css';
import Main from './components/main/Main';
import Favorites from './components/favorites/Favorites';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved" element={<Favorites/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
