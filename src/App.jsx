import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { useApolloClient,useSubscription } from '@apollo/client'
import Home from './components/Home'
import Authors from './components/Authors'
import Books from './components/Books'
import AddBook from './components/AddBook'
import LoginForm from './components/LoginForm'
import Reccomendations from './components/Reccomendations'
import Notification from './components/Notification'
import { BOOK_ADDED } from './queries'

const padding = {
    padding: 5
  }

function App() {
  const [token, setToken] = useState(null)
  const [noti, setNoti] = useState('')
  const notificationHandler = (message) => {
    setNoti(`book ${message} added to the database`)
    setTimeout(() => {
      setNoti('')
    }, 5000);
  }
  const client = useApolloClient()
  useSubscription(BOOK_ADDED,{
    onData: ({data}) => {
      console.log('completed exercise 8.24')
      console.log('running subscription')
      console.log('subscription',data)
      notificationHandler(data.data.bookAdded.title)
    },
    onError:(error) =>{
      console.log(error)
    }
  })
  const logout = () =>{
    localStorage.clear()
    setToken(null)
    client.resetStore()
  }
  // console.log(token)
  return (
    <>
    <Notification noti={noti}/>
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
