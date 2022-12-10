


const LogoutBtn = () =>{
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">LOGOUT</button>
        </form>
    )
}

export default LogoutBtn