import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { useApolloClient } from '@apollo/client'
import Home from './components/Home'
import Authors from './components/Authors'
import Books from './components/Books'
import AddBook from './components/AddBook'
import LoginForm from './components/LoginForm'
import Reccomendations from './components/Reccomendations'

const padding = {
    padding: 5
  }

function App() {
  const [token, setToken] = useState(null)
  const client = useApolloClient()

  const logout = () =>{
    localStorage.clear()
    setToken(null)
    client.resetStore()
  }
  console.log(token)
  return (
    <>
      <Router>
        <div>
          <Link style={padding} to={'/'}>Home</Link>
          <Link style={padding} to={'/authors'}>Authors</Link>
          <Link style={padding} to={'/books'}>Books</Link>
          {token === null ? <Link style={padding} to={'/login'}>Login</Link>:<><Link style={padding} to={'/addBook'}>Add Book</Link><Link style={padding} to={'/reccomendations'}>Reccomendations</Link><button onClick={logout}>logout</button></>}
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/authors' element={<Authors/>}/>
          <Route path='/books' element={<Books/>}/>
          {token === null?<Route path='/login' element={<LoginForm setToken={setToken}/>}/>:<><Route path='/addBook' element={<AddBook/>}/><Route path='/reccomendations' element={<Reccomendations/>}/></>}
        </Routes>
      </Router>
    </>
  )
}

export default App
