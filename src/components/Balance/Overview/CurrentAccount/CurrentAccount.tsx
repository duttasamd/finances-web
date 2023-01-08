import { FC, useEffect, useState } from "react";

export interface CurrentAccountInfo {
    uuid : string,
    name : string,
    number : string,
    bank : string,
    currentAmount : number,
    currency : string
}

const CurrentAccount : FC<CurrentAccountInfo> = (currentAccountInfo : CurrentAccountInfo) => {    
    return (
        <div className="mt-3 d-flex mx-3 justify-content-between">
            <div className="">
                <div className="text-start">{currentAccountInfo.name}</div>
                <div className="text-start"><small className="text-muted">{currentAccountInfo.number}</small></div>
            </div>
            <div className="">
                <div className="text-end">{currentAccountInfo.currentAmount}</div>
                {/* <div className="text-end"><small className="text-muted">{currentAccountInfo.rateOfInterest}%</small></div> */}
            </div>
        </div>
    );
}

export default CurrentAccount;