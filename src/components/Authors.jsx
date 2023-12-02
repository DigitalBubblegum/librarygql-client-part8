import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { ALL_AUTHORS, MODIFY_AUTHOR_BORN } from '../queries'

const Authors = () => {
    const result = useQuery(ALL_AUTHORS)
    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')

    const [modifyAuthorBorn] = useMutation(MODIFY_AUTHOR_BORN)
    const submit = (event) => {
        event.preventDefault()
        console.log('submitted')
        console.log(event.target[0].value)
        setName(event.target[0].value)
        // console.log(name)
        const content = {
            name: event.target[0].value,
            setBornTo: parseInt(birth)
        }
        console.log(content)
        modifyAuthorBorn({variables:content})
        setName('')
        setBirth('')
    }
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
        <h2>Set BirthYear</h2>
        <form onSubmit={submit}>
            {/* <div>
                Author name <input value={name} placeholder='enter a valid author' onChange={({target})=>setName(target.value)}/>
            </div> */}
            <select>
                {authors.map(author => <option key={author.id} value={author.name}>{author.name}</option>)}
            </select>
            <div>
                Author Birth Year<input value={birth} onChange={({target})=>setBirth(target.value)}/>
            </div>
            <button type='submit'>modify birth</button>
        </form>
    </div>)
}
export default Authors