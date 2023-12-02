import { useQuery } from '@apollo/client'
import { ALL_AUTHORS } from '../queries'

const Authors = () => {
    const result = useQuery(ALL_AUTHORS)
  if (result.loading) {
        return <div>loading...</div>
    }
    // console.log(result.data)
    const authors = result.data.allAuthors
    // console.log('in authors components',authors)
    return(
    <div>
        <h1>Authors</h1>
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Authors</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author => <tr key={author.id}>
                    <td>
                        {author.name}
                    </td>
                    <td>
                        {author.born}
                    </td>
                    <td>
                        {author.bookCount}
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>)
}
export default Authors