import { useState } from "react";
const NameForm = () => {
    const[name, setName]=useState("");
    const PressPrint = () =>{
        if(name.length == 0){
            alert("The name input can't be empty");
        }else{
            alert("Welcome to my profile, "+ name);}
    }
    return(
        <div>
            <input onChange={(e) => setName(e.target.value)} />
            <button onClick={PressPrint}>Submit</button>
        </div>
    )
}
export default NameForm;