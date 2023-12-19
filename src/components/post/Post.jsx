import style from "./Post.module.css"

function Post(props){
    return(
        <li className={style.div}>
            <p className={style.name}>{props.name}</p>
            <p className={style.body}>{props.body}</p>
        </li>
    )
}

export default Post;