import { ChangeEvent, FormEvent, useState } from "react";
import { CookieStand } from "./CookieTable";

import React from 'react'

//props is an object 
//that has a property onAddStore 
// onAddStore is a type function
//which has one argument that is type cookieStand
// and the function returns nothing that is type "void"

const CookieForm = (props: { onAddStore: (store: CookieStand) => void })=>{

    const [location, setLocation] = useState('');
    const [minCustomers, setMinCustomers]=useState(0);
    const [maxCustomer, setMaxCustomers]=useState(0);
    const [avgCookiePerSale, setavgCookiePerSale]=useState(0);

  return (
    <div>
        <form onSubmit={(e: FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            const newStore = new CookieStand(location, 24, 34, 6.2);
            console.log(e);
        }}>
            <label>
                <input
                    type="number"
                    value={location}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        setLocation(e.target.value);
                    }}/>
            </label>
            <label>
                Min Customer{''}
                <input
                    value={minCustomers}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        setMinCustomers(Number(e.target.value));
                    }}/>
            </label>
            <label>
                Max Customer{''}
                <input
                    value={maxCustomer}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        setMaxCustomers(Number(e.target.value));
                }}
                />
            </label>
            <label>
                Avg Cookie Per Customer{''}
                <input
                    value={avgCookiePerSale}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                        setavgCookiePerSale(Number(e.target.value));
                    }}
                >
                
                </input>
            </label>
            <button type="submit">submit</button>
        </form>

        <div>Location: {location}</div>
        <div>Min Customers: {minCustomers}</div>
        <div>Max Customers: {maxCustomer}</div>
    </div>
  )
}

export default CookieForm
