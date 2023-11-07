import { ChangeEvent, FormEvent, useState } from "react";
import { CookieStand } from "./CookieTable";

import React from 'react'

const CookieForm = () => {

    const [location, setLocation] = useState('');
  return (
    <div>
        <form onSubmit={(e: FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            console.log(e);
        }}>
            <label>
                <input
                    value={location}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        setLocation(e.target.value);
                    }}/>
            </label>
            <button type="submit">submit</button>
        </form>
      
    </div>
  )
}

export default CookieForm
