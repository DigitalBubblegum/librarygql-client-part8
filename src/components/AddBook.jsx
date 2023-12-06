import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ALL_AUTHORS, ALL_BOOKS, CREATE_BOOK,GET_ALL_BOOK_GENRES } from '../queries'

const AddBook = () => {
    const [createBook] = useMutation(CREATE_BOOK)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [published, setPublished] = useState('')
    const [gen, setGen] = useState('')
    const [genres, setGenres] = useState([])
    const submit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log('clicked submit button')
        //add createBook here
        const content = {
            title: title,
            author: author,
            published: parseInt(published),
            genres: genres,
        }
        createBook({variables:content,
            refetchQueries:[{query:ALL_BOOKS},{query:ALL_AUTHORS},{query:GET_ALL_BOOK_GENRES}]},)
        console.log(content)
        setTitle('')
        setAuthor('')
        setPublished('')
        setGenres('')
    }
    const addToGenreList = (event) => {
        event.preventDefault()
        console.log(gen)
        let newGenres = [...genres,gen]
        console.log('clicked add to genre button')
        setGenres(newGenres)
        console.log(genres)
        setGen('')
    }
    return (
        <div>
            <h1>Add a book</h1>
            <form onSubmit={submit}>
                <div>
                    title <input value={title} onChange={({target})=>setTitle(target.value)}/>
                </div>
                <div>
                    author <input value={author} onChange={({target})=>setAuthor(target.value)}/>
                </div>
                <div>
                    published <input value={published} onChange={({target})=>setPublished(target.value)}/>
                </div>
                <div>
                    <input value={gen} type='text' name='gen' id='gen' onChange={({target})=>setGen(target.value)}/>
                    <button onClick={addToGenreList}>add genre</button>
                    <br/>
                    genres:
                    {!genres ? null : genres.map(genre => <>&nbsp;{genre}</>)}
                </div>
                <div>
                    <button type='submit'>add!</button>
                </div>
            </form>
        </div>
    )
}
export default AddBook