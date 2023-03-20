import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Layout from "./hooks/Layout"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
