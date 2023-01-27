import { FC, useEffect, useState } from "react";
import { Card, Collapse } from "react-bootstrap";
import CurrencyConverter from "../../../../helpers/CurrencyConverter";
import CurrentAccount, { CurrentAccountInfo } from "./CurrentAccount";

export interface CurrentAccountInfoList {
    currentAccountInfos : CurrentAccountInfo[]
}

const CurrentAccountOverview : FC<CurrentAccountInfoList> = (currentAccountInfoList : CurrentAccountInfoList) => {
    const [open, setOpen] = useState(false);
    
    let count : number = 0;
    let total = 0;

    const currentAccounts = currentAccountInfoList.currentAccountInfos.map((currentAccountInfo) => {
        count++;
        const convertedCurrencyValue = CurrencyConverter.convert(currentAccountInfo.currentAmount, currentAccountInfo.currency, "EUR");
        total += convertedCurrencyValue;

        return (<div key={count}>
                <CurrentAccount {...currentAccountInfo}></CurrentAccount>
                {count == currentAccountInfoList.currentAccountInfos.length ? null : <hr /> }
            </div>
        )
    });
    
    return (
        <Card className="mx-sm-5 mx-3">
            <Card.Header onClick={() => setOpen(!open)} className="d-flex bg-gray">
                <div className="me-auto">Current Accounts</div>
                <div className="ms-auto"><span>€</span> {total.toFixed(2)}</div>
            </Card.Header>
            <Collapse in={open} className="px-0">
                <div>
                    {
                        currentAccounts
                    }
                </div>
            </Collapse>
        </Card>
    );
}

export default CurrentAccountOverview;