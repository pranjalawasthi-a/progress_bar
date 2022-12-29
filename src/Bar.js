import './Bar.css';
import { useState } from 'react';
const Bar = ()=> {
const[value,setValue]=useState(0);

    const updateValue = (change)=>{
        if((change>0 && value<100) || ((value>0 && change<0))){
            setValue(value+change);
        }
    }
    return ( 
    <div className="box" >
        <div className='container'>
            <div style={{
                  paddingTop:"7px",
				  borderRadius: "6px",
                  paddingBottom: "7px",
                  textAlign: "right",
                  width: `${value}%`,
                  backgroundColor: "rgb(255, 0, 85)"
			  }}>
                {value}%
            </div>
        </div>
        <br />
        <div>
            <button onClick ={()=>{updateValue(10)}} className="buttons">Increase</button>
            <button onClick ={()=>{updateValue(-10)}} className="buttons">Decrease</button>
        </div>
    </div>
    )
}
export default Bar;