


const Form = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} className={"form " + props.formClass}>
            {props.children}
            <button type="submit" >{ props.btnTxt }</button>
        </form>
    )
}

export default Form