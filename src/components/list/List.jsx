import Post from "../post/Post"
import style from "./List.module.css"
import NewPost from "../newpost/NewPost"
import { useState } from "react"
import Modal from "../modal/Modal"

const List = ({ isPosting, onStopPosting }) => {

    const [bodyValue, setBodyValue] = useState('')
    const [textValue, setTextValue] = useState('')

    const handleBody = (event) => {
        setBodyValue(event.target.value)
    }

    const handleText = (event) => {
        setTextValue(event.target.value)
    }

    // this is a better practise than ternay code inside the return
    let modalContent;
    if(isPosting){
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost onBodyChange={handleBody} onTextChange={handleText} />
            </Modal>
        )
    }

    return (
        <>
            {modalContent}
            <ul className={style.post}>
                <Post name={bodyValue} body={textValue} />
                <Post name='Ibrahim' body='Bi numara yaptigim yok, o kerizlik bende dogustan beri var.' />
            </ul>
        </>
    )

}

export default List;