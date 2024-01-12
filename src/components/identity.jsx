const Identity = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.npm}</div>
            <div>{props.github}</div>
        </div>
    )
}
export default Identity;