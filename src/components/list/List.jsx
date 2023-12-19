import Post from "../post/Post"
import style from "./List.module.css"

const List = () => {
    return (
        <ul className={style.post}>
            <Post name='Bob Marley' body='Dur be Arif!' />
            <Post name='Ibrahim' body='Bi numara yaptigim yok, o kerizlik bende dogustan beri var.' />
        </ul>
    )

}

export default List;