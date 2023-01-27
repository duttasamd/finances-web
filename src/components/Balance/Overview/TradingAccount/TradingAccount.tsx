import { FC, useEffect, useState } from "react";

export interface TradingAccountInfo {
    uuid : string,
    name : string,
    number : string
    currentAmount : number,
    currency : string
}

const TradingAccount : FC<TradingAccountInfo> = (tradingAccountInfo : TradingAccountInfo) => {
    const currency = tradingAccountInfo.currency === "EUR" ? "€" : "₹";    
    return (
        <div className="my-3 d-flex mx-3 justify-content-between">
            <div className="">
                <div className="text-start">{tradingAccountInfo.name}</div>
                <div className="text-start"><small className="text-muted">{tradingAccountInfo.number}</small></div>
            </div>
            <div className="">
                <div className="text-end"><span>{currency}</span> {tradingAccountInfo.currentAmount}</div>
                {/* <div className="text-end"><small className="text-muted">{tradingAccountInfo.rateOfInterest}%</small></div> */}
            </div>
        </div>
    );
}

export default TradingAccount;