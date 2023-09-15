import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './css/main.css'

import Home from './pages/home'
import Signin from './pages/sign-in'
import User from './pages/user'

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/user" element={<User/>}/>
            </Routes>
        </Router>
  )
}

export default App
