import Form from "../blockComponents/Form"


const LogoutBtn = () =>{
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return <Form handleSubmit={handleSubmit} btnTxt="LOGOUT" />
    
}

export default LogoutBtn