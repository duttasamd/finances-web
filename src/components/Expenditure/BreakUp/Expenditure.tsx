import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from '@fortawesome/fontawesome';

import { faS, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
fontawesome.library.add(faS as any, faCircleMinus as any)



export interface ExpenditureInfo {
    uuid : string,
    eventUuid : string,
    type : string,
    amount : number,
    comment : string,
    account : string,
    timestamp : string
}

const Expenditure : FC<ExpenditureInfo> = (expenditureInfo) => {
    const date : Date = new Date(expenditureInfo.timestamp);

    const handleRemove = () => {
        console.log(`Remove expenditure ${expenditureInfo.uuid}`);

        const removeExpenditureUrl = `${process.env.REACT_APP_FINANCES_API_HOST}/expenditure/${expenditureInfo.uuid}`;
        fetch(removeExpenditureUrl, {
            method:"delete"
        })
        .then(response => {
            if(response.status === 200) {
                window.location.reload();
            }
        });
    }

    return (<div className="f-black row px-3 py-3">
        <div className="col-6 text-start">
            <span>{expenditureInfo.comment}</span><br />
            <span className="text-muted me-3"><small>{date.toLocaleDateString("en-GB", {
                day : "numeric",
                month : "short"
            })}</small></span>
        </div>
        <div className="col-6 text-end">
            <span>{expenditureInfo.amount.toFixed(2)}</span><FontAwesomeIcon className="f-red-a20 ms-2" icon={["fas","circle-minus"]} onClick={handleRemove}/><br />
            <span className="text-muted"><small>{expenditureInfo.account}</small></span>
        </div>
    </div>);
}

export default Expenditure;