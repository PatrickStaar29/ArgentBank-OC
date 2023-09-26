import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/main.css'

import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
  )
}

export default App
