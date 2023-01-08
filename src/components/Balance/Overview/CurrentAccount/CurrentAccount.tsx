import { FC, useEffect, useState } from "react";
import CurrencyConverter from "../../../../helpers/CurrencyConverter";

export interface CurrentAccountInfo {
    uuid : string,
    name : string,
    number : string,
    bank : string,
    currentAmount : number,
    currency : string
}

const CurrentAccount : FC<CurrentAccountInfo> = (currentAccountInfo : CurrentAccountInfo) => {    
    const currency = currentAccountInfo.currency === "EUR" ? "€" : "₹";
    return (
        <div className="mt-3 d-flex mx-3 justify-content-between">
            <div className="">
                <div className="text-start">{currentAccountInfo.name}</div>
                <div className="text-start"><small className="text-muted">{currentAccountInfo.number}</small></div>
            </div>
            <div className="">
                <div className="text-end"><span>{currency}</span> {currentAccountInfo.currentAmount}</div>
                {currentAccountInfo.currency === "INR" ? 
                <div className="text-end">
                    <small className="text-muted"><span>€</span> {CurrencyConverter.convert(currentAccountInfo.currentAmount, "INR", "EUR").toFixed(2)}
                    </small>
                </div> : null}
            </div>
        </div>
    );
}

export default CurrentAccount;