import { FC, useEffect, useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import CurrencyConverter from "../../../../helpers/CurrencyConverter";

export interface FixedAccountInfo {
    uuid : string,
    name : string,
    number : string,
    bank : string,
    currentAmount : number,
    currency : string,
    rateOfInterest : number,
    dateOfMaturity : string
}

const FixedAccount : FC<FixedAccountInfo> = (fixedAccountInfo : FixedAccountInfo) => {    
    const currency = fixedAccountInfo.currency === "EUR" ? "€" : "₹";
    return (
        <div className="mt-3 d-flex mx-3 justify-content-between">
            <div className="">
                <div className="text-start">{fixedAccountInfo.name}</div>
                <div className="text-start"><small className="text-muted">{fixedAccountInfo.number}</small></div>
            </div>
            <div className="">
                <div className="text-end"><span>{currency}</span> {fixedAccountInfo.currentAmount} <small className="text-muted ms-1">{fixedAccountInfo.rateOfInterest}%</small></div>
                {fixedAccountInfo.currency === "INR" ? 
                <div className="text-end">
                    <small className="text-muted"><span>€</span> {CurrencyConverter.convert(fixedAccountInfo.currentAmount, "INR", "EUR").toFixed(2)}
                    </small>
                </div> : null}
            </div>
        </div>
    );
}

export default FixedAccount;