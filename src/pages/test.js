import React from "react"
import {Link} from "gatsby"
import {navigate} from "gatsby"
import Header from "../components/Header"

const Test = () => (
    <div>
        <Header title="Header of test page"></Header>
        <h1>This is a test page!</h1>   
        <h1>This is a test page2!</h1>
        <div>
            <Link to="/">Back</Link>
        </div>
        <div><button onClick={()=>navigate("/")}>Navigate to Home</button></div>
    </div>

)

export default Test;