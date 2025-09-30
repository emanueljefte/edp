import './App.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Site from './pages/Site'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path='/' element={<Site />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
