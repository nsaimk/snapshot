import Post from "../post/Post"
import style from "./List.module.css"
import NewPost from "../newpost/NewPost"

const List = () => {
    return (
        <>
            <NewPost />
            <ul className={style.post}>
                <Post name='Bob Marley' body='Dur be Arif!' />
                <Post name='Ibrahim' body='Bi numara yaptigim yok, o kerizlik bende dogustan beri var.' />
            </ul>
        </>
    )

}

export default List;