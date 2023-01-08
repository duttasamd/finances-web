import { FC, useEffect, useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";

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
    return (
        <div className="mt-3 d-flex mx-3 justify-content-between">
            <div className="">
                <div className="text-start">{fixedAccountInfo.name}</div>
                <div className="text-start"><small className="text-muted">{fixedAccountInfo.number}</small></div>
            </div>
            <div className="">
                <div className="text-end">{fixedAccountInfo.currentAmount}</div>
                <div className="text-end"><small className="text-muted">{fixedAccountInfo.rateOfInterest}%</small></div>
            </div>
        </div>
    );
}

export default FixedAccount;