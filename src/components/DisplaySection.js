import {useState, useEffect} from 'react';
import "../css/App.css";

const DisplaySection = ()=>{
    let [displayNumber,setDisplayNumber] = useState([])
    let [total, setTotal] = useState(0)

    useEffect(()=>{
        setDisplayNumber(JSON.parse(localStorage.getItem("selectedNumber")))
    },[JSON.parse(localStorage.getItem("selectedNumber"))])


useEffect(()=>{
    setTotal(localStorage.getItem("total"))
},[localStorage.getItem("total")])

return(
    <div className="number-list-display">
        <h3>Numbers Selected:</h3>
        {displayNumber.map((number)=>{
            return <h4>Mark: {number}</h4>})}
 
            <h4>Total Amount: $ {total}</h4>
        </div>
)
    
}

export default DisplaySection;