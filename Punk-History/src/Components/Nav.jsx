import { useState } from "react"
import General from "./General"
import Section from "./Section"


const Nav = () => {
    const [content, setContent] = useState(<General />)

    return <div>
        <div className="buttons">
            <button onClick={() => { setContent(<General />)}}>Hem</button>
            <button onClick={() => { setContent(<Section />)}}>Band</button> 
        </div>
        {content}
    </div>
}

export default Nav