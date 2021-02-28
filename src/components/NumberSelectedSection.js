import {React,useState} from 'react';
import Number from "./Numbers";
import Modal from "react-modal";
import CashScreen from "./CashScreen";
import "../css/App.css";

const NumberSelectedSection = () => {
    const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    const cashButtonClicked = ()=>{
        const checkCount = parseInt(localStorage.getItem("count"));
        const total = parseInt(localStorage.getItem("total"));
        if(checkCount === 5 && total >0){
            setModalIsOpenToTrue();
        }
        else{
            alert("Select 5 numbers and select the amount")
        }
    }
    const clearButtonClicked = ()=> {
        window.location.reload(false);
        localStorage.setItem("total",0);
        localStorage.setItem("selectedNumber",JSON.stringify([]));
        localStorage.setItem("count",1);
        localStorage.setItem("clear","true");
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <div className = "NumberSection">
            <div className="Number-rows nochange">
                {numberArray.map((number)=>{
                    return <Number number={number}/>
                })}
                <button onClick={cashButtonClicked} className ="confirms-buttons noChange">
                Cash
                </button>
                <Modal className="Modal" isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <CashScreen/>
            </Modal>
                <button onClick={clearButtonClicked} className ="confirms-buttons noChange">
                    Clear
                </button>
                </div>
            </div>
      )
    
    
}


export default NumberSelectedSection


