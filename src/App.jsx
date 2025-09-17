import './App.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Site from './pages/Site'

function App() {

  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path='/' element={<Site />} />
      </Routes>
    </Router>
  )
}

export default App
