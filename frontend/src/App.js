import React from 'react' ;
import { useState } from 'react';

function App() {
   const[output,setOutput] = useState() ;
   const[checked,setCheck] = useState("") ;

  
   

  const getIPaddress = ()=>{

    
     
  }

  return (
    <div className="container">
      <form className="form_container">
        <h3>Domain to Resolve in IP Address </h3>
        <input
          className="ipInput"
          type="text"
          placeholder="Enter Your Website Name"
        />
        <br />
        <div className="check_box">
          <div>
            <input 
               className='radio_check'
               type="radio" name="ip"
               value="ip4" 
               onChange={()=>setCheck("ip4")}
             /> 
               <label>IPv4 Address</label>
          </div>
          <div>
            <input 
              className='radio_check' 
              type="radio" name="ip" value="ip6"
              onChange={()=>setCheck("ip6")}
            />
            <label>IPv6 Address</label>
          </div>
        </div>
        <button onClick={getIPaddress()}>Get IP Address</button>
        <input className="output" ></input>
      </form>
    </div>
  );
}

export default App;
