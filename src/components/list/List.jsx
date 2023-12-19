import Post from "../post/Post"
import style from "./List.module.css"
import NewPost from "../newpost/NewPost"
import { useState } from "react"

const List = () => {

    const [bodyValue, setBodyValue] = useState('')
    const [textValue, setTextValue] = useState('')

    const handleBody = (event) => {
        setBodyValue(event.target.value)
    }
    const handleText = (event) => {
        setTextValue(event.target.value)
    }

    return (
        <>
            <NewPost onBodyChange={handleBody} onTextChange={handleText}/>
            <ul className={style.post}>
                <Post name={bodyValue} body={textValue} />
                <Post name='Ibrahim' body='Bi numara yaptigim yok, o kerizlik bende dogustan beri var.' />
            </ul>
        </>
    )

}

export default List;