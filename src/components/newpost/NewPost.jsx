import style from "./NewPost.module.css"
import { useState } from "react"

const NewPost = () => {

    const [textValue, setTextValue] = useState('')

    const handleBody = (event) => {
        setTextValue(event.target.value)
    }

    return(
        <form className={style.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={handleBody}></textarea>
            </p>
            <p>{textValue}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" required rows={1}></textarea>
            </p>
        </form>
    )
}

export default NewPost;
