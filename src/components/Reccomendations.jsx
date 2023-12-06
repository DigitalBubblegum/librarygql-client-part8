import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { USER_INFO,ALL_BOOKS } from '../queries'
const Reccomendations = () => {
    const genre = useQuery(USER_INFO)
    const books = useQuery(ALL_BOOKS)
    const reccoBooks = books.data.allBooks.filter(book=>book.genres.includes(genre.data.me.favoriteGenre))
    console.log(reccoBooks)
    if (genre.loading) {
        return <div>loading...</div>
    }
    console.log(genre.data.me.favoriteGenre)
    return(
    <div>
        <h1>Reccomendations</h1>
        books in your favorite genre <b>{genre.data.me.favoriteGenre}</b>
                <table>
                <thead>
                    <tr>
                        <th colSpan="4"></th>
                    </tr>
                </thead>
                <tbody>
                    <td><b>Title</b></td>
                    <td><b>Author</b></td>
                    <td><b>Published</b></td>
                    {reccoBooks.map(book=><tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author.name}</td>
                        <td>{book.published}</td>
                    </tr>)}
                </tbody>
            </table>
    </div>)
}
export default Reccomendations