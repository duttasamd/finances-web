import { FC } from "react";

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

    return (<div className="f-black row px-3 py-3">
        <div className="col text-start ms-3">
            <span>{expenditureInfo.comment}</span><br />
            <span className="text-muted me-3"><small>{date.toLocaleDateString("en-GB", {
                day : "numeric",
                month : "short"
            })}</small></span>
        </div>
        <div className="col text-end me-3">
            <span>{expenditureInfo.amount.toFixed(2)}</span>
            <small></small>
        </div>
    </div>);
}

export default Expenditure;