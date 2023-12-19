import Post from "../post/Post"
import style from "./List.module.css"
import NewPost from "../newpost/NewPost"
import { useState } from "react"
import Modal from "../modal/Modal"

const List = () => {

    const [bodyValue, setBodyValue] = useState('')
    const [textValue, setTextValue] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(true)

    const handleBody = (event) => {
        setBodyValue(event.target.value)
    }
    const handleText = (event) => {
        setTextValue(event.target.value)
        
    }

    const hideModalHandler = () => {
        setIsModalVisible(false)
    }

    // this is a better practise than ternay code inside the return
    let modalContent;
    if(isModalVisible){
        modalContent = (
            <Modal onClose={hideModalHandler}>
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