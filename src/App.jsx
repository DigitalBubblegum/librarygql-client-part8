import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Authors from './components/Authors'
import Books from './components/Books'
import AddBook from './components/AddBook'
const padding = {
    padding: 5
  }

function App() {
  return (
    <>
      <Router>
        <div>
          <Link style={padding} to={'/'}>Home</Link>
          <Link style={padding} to={'/authors'}>Authors</Link>
          <Link style={padding} to={'/books'}>Books</Link>
          <Link style={padding} to={'/addBook'}>Add Book</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/authors' element={<Authors/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/addBook' element={<AddBook/>}/>
        </Routes>
      </Router>
      {/* <Authors result={result}/> */}
    </>
  )
}

export default App
