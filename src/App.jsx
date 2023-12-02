import Authors from './components/Authors'
import { useQuery } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ALL_AUTHORS } from './queries'
import Home from './components/Home'

const padding = {
    padding: 5
  }

function App() {
  const result = useQuery(ALL_AUTHORS)
  if (result.loading) {
        return <div>loading...</div>
    }
  console.log('in app compo',result.data)
  
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
          <Route path='/authors' element={<Authors result={result}/>}/>
        </Routes>
      </Router>
      {/* <Authors result={result}/> */}
    </>
  )
}

export default App
