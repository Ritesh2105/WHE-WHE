import {useState, useEffect} from 'react';
import "../css/App.css";

const Numbers = (props) => {
    let [currentState,setCurrentState] = useState("noChange");
    let [clickState,setClickState] = useState(false)
    
    useEffect(()=>{
        if(clickState === false){
            setCurrentState("noChange");
        }
        else{
            setCurrentState("changeInBorder");
        }
    },[clickState])

    useEffect(()=>{
        if(localStorage.getItem("clear")==="true"){
            localStorage.setItem("clear","false")
            setCurrentState("noChange")
        }
    },[localStorage.getItem("clear")])

    const clickedButton = ()=>{
        let selectedNumber = [];
        selectedNumber = JSON.parse(localStorage.getItem("selectedNumber"))
        let count = localStorage.getItem("count")
        if(clickState === true){
            setClickState(false)
            if(selectedNumber.includes(props.number)){
                count--;
                localStorage.setItem("count",count)
                for(let i=0;i<selectedNumber.length;i++){
                    if(selectedNumber[i]===props.number){
                        selectedNumber.splice(i,1)
                    }
                }
                localStorage.setItem("selectedNumber",JSON.stringify(selectedNumber))
            }
        }
        else{
            if(count<5){
                count++;
                localStorage.setItem("count",count);
                setClickState(true);
                selectedNumber.push (props.number);
                localStorage.setItem("selectedNumber",JSON.stringify(selectedNumber))

            }
            else{
                alert("You can not select more than 5 numbers");
            }
        }
        
    }

return(
    <button className={'color'+currentState} onClick={clickedButton}>{props.number}</button>
)
}

export default Numbers
