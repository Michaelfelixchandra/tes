import { useEffect, useState } from "react";

function Number() {
    const[calculate, setCalculate]=useState(0);
    
    useEffect (() => {
        document.title= calculate+ " times clicked";
    }, [calculate]);

    return (
        <div>
            <button onClick={() => setCalculate((calculate) => calculate + 1)}>Change Counter {calculate} times clicked</button>
        </div>
    )
}
export default Number;
