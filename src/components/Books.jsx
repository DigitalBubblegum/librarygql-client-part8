import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'
import { useState } from 'react'

const Books = () => {
    const [booksFilter, setBooksFilter] = useState('all')
    const result = useQuery(ALL_BOOKS)
    if (result.loading) {
        return <div>loading...</div>
    }
    const genreList = []
    // console.log(result.data)
    const books = result.data.allBooks
    // console.log(books.map(book=>book.genres))
    books.map(book => {
        book.genres.forEach(element => {
            if (genreList.includes(element)) {
                null
            }
            else{
                genreList.push(element)
            }
        })
    })
    // console.log(genreList)
    const filterBooksList = () =>{
        const reccoBooks = books.filter(book=>book.genres.includes(booksFilter))
        return (
            reccoBooks.map(book=><tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author.name}</td>
                        <td>{book.published}</td>
                    </tr>)
        )
    }
    return(
        <div>
            <h1>Books</h1>
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Books</th>
                    </tr>
                </thead>
                <tbody>
                    {booksFilter === 'all'?
                    books.map(book=><tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author.name}</td>
                        <td>{book.published}</td>
                    </tr>):filterBooksList()
                }
                </tbody>
            </table>
            <div>
                <button onClick={()=>setBooksFilter('all')}>All</button>
                {genreList.map(element => <button key = {element} onClick={()=>setBooksFilter(element)}>{element}</button>)}
            </div>
        </div>
    )
}
export default Books