import {BrowserRouter, Routes, Route} from "react-router"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="/signup" element={<h1>Signup</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export {App};