import {React,useState} from 'react';
import "../css/App.css";

const CashScreen = () => {
const total = parseInt(localStorage.getItem("total"));
const numberArray = [1,2,3,4,5,6,7,8,9,0]
        return (
            <div className = "Cash-Screen">
                <h2>Cash</h2>
                <h3>Enter Amount Received</h3>
                <div className="Amount-received">
                <label for="total">Total:</label>
                <input type="text" onkeydown="return false"  id="total" name="total" value = {total}/><br></br>
                <br></br>
                <label for="received">Recieved:</label>
                <input type="text" id="received" name="received"/><br></br><br></br>
                <label for="change">Change:</label>
                <input type="text" id="change" name="change"/><br></br><br></br>
                <button className= "confirm" >Confirm</button>
                <button className= "Close" >Close</button>
                </div>
                <div className = "CalculatorNumber">
                <button name="1">1</button>
                <button name="2">2</button>
                <button name="3">3</button>
                <button name="4">4</button>
                <button name="5">5</button>
                <button name="6">6</button>
                <button name="7">7</button>
                <button name="8">8</button>
                <button name="9">9</button>
                <button name=".">.</button>
                <button className = "d" name="d">d</button>
                    </div>
            </div>
        )

}

export default CashScreen;