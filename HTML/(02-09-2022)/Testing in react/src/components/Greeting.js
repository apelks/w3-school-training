import { useState } from "react";
import Output from "./Output";


const Greeting = () =>{

    const [changedText,setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

    return(
        <div>
            <h2>Hello kukan</h2>

            {!changedText && <Output>Who are You</Output>}

            {changedText && <Output>change</Output>}


            <button onClick={changeTextHandler}>change Text</button>
        </div>
    )


}


export default Greeting;