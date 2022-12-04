

const Form = (props) =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.action && props.action(props.args)
    }
    return (
        <form onSubmit={handleSubmit}>
            { props.children }
            <button type="submit">{ props.btnText }</button>
        </form>
    )
}

export default Form