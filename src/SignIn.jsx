import React, { useEffect, useState } from "react";
import { auth, provider } from "./components/config";
import { signInWithPopup } from "firebase/auth";
import Conteudo from "./Conteudo";

function SignIn() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
  })
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  })

  return (
    <div>
      {value?<Conteudo /> : <button onClick={handleClick}>Login</button> }
    </div>
  );
}

export default SignIn;
