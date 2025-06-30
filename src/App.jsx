import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'

import Sidebar from './components/sidebar.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
