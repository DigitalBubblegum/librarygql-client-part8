import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'
const Books = () => {
    const result = useQuery(ALL_BOOKS)
    if (result.loading) {
        return <div>loading...</div>
    }
    // console.log(result.data)
    const books = result.data.allBooks
    // console.log(books)
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
                    
                    {books.map(book=><tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.published}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default Books