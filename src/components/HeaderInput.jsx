import React from "react";
import './HeaderInput.scss';
import { IoSearch } from "react-icons/io5";
import SignIn from "../SignIn"



const HeaderInput = () =>{

  return(
    <>  
      <div className="headerInput">
        <div className="inputDiv">
          <input type="text" placeholder="Pesquisar"/>
          <IoSearch className="iconSearch"/>
        </div> 
        <div>
          
        </div>        
      </div>
    </>
  )
}

export default HeaderInput