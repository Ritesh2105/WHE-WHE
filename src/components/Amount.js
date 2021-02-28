import "../css/App.css";
import dollar1 from '../images/dollar1.JPG';
import dollar5 from '../images/dollar5.JPG';
import dollar10 from '../images/dollar10.JPG';
import dollar20 from '../images/dollar20.JPG';

const Amount = ()=> {
    const amountSelected = (number)=>{
        let total = parseInt(localStorage.getItem("total"));
        total= total+number;
        localStorage.setItem("total",total)
    }

    return(
        <div className="amount">
            <div className="buttons">
                <button onClick={()=>{
                    amountSelected(1)
                    }}><img src={dollar1} alt="dollar1" width = '40px'/></button>
                <button onClick={()=>{
                    amountSelected(5)}}
                    ><img src={dollar5} alt="dollar5" width = '40px'/></button>
                <button onClick={()=>{
                    amountSelected(10)}}
                    ><img src={dollar10} alt="dollar10" width = '40px'/></button>
                <button onClick={()=>{
                    amountSelected(20)}}
                    ><img src={dollar20} alt="dollar20" width = '40px'/></button>
                </div>
            </div>
    )

}

export default Amount;