import style from "./NewPost.module.css"

const NewPost = (props) => {
    return(
        <form className={style.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onTextChange}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" required rows={1} onChange={props.onBodyChange}></textarea>
            </p>
        </form>
    )
}

export default NewPost;
