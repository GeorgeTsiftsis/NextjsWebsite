import classes from './style.module.css';   
function index(props) {
    return (
        <span className={classes.span}>
            <a>{props.title}</a>
            </span>
    )
}

export default index
