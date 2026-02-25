import { use, useEffect,useState } from "react";
import './Clock.css';
export let Clock = () => {
    let date = new Date();
    const [time,setTime] = useState(date.toLocaleTimeString());
    
    useEffect(() => {

         setInterval(() => {

         setTime(new Date().toLocaleTimeString());
        },1000);


    },[time])

    return(
        // <div   style={{ display: 'inline', marginRight: 500 }}   >
        <>
            <h2  className="header-inline m500 col-xxl col-md col-sm col-xl col-l col-xs"   > ⏰{time}</h2>
            <hr/>
            </>
        // </div>
    )
}
