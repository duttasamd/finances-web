import { FC, useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import CurrencyConverter from "../../../../helpers/CurrencyConverter";
import FixedAccount, { FixedAccountInfo } from "./FixedAccount";

export interface FixedAccountInfoList {
    fixedAccountInfos : FixedAccountInfo[]
}

const FixedAccountOverview : FC<FixedAccountInfoList> = (fixedAccountInfoList : FixedAccountInfoList) => {
    const [open, setOpen] = useState(false);
    let count : number = 0;
    let total : number = 0;

    const fixedAccounts = fixedAccountInfoList.fixedAccountInfos.map((fixedAccountInfo) => {
        count++;
        const convertedCurrencyValue = CurrencyConverter.convert(fixedAccountInfo.currentAmount, fixedAccountInfo.currency, "EUR");
        total += convertedCurrencyValue;
        return (<div key={count}>
                <FixedAccount {...fixedAccountInfo}></FixedAccount>
                {count == fixedAccountInfoList.fixedAccountInfos.length ? null : <hr /> }
            </div>
        )
    });
    
    return (
        <Card className="mx-sm-5 mx-3">
            <Card.Header onClick={() => setOpen(!open)} className="d-flex bg-black f-white">
                <div className="me-auto">Fixed Accounts</div>
                <div className="ms-auto"><span>€</span> {total.toFixed(2)}</div>
            </Card.Header>
            <Collapse in={open} className="px-0 pb-3">
                <div>
                    {
                        fixedAccounts
                    }
                </div>
            </Collapse>
        </Card>
    );
}

export default FixedAccountOverview;