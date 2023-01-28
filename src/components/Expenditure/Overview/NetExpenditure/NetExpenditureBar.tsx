import { FC, useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export interface NetExpenditureBarProps {
    fixed : number,
    spent : number,
    remaining : number
}


const NetExpenditureBar : FC<NetExpenditureBarProps> = (netExpenditureBarProps : NetExpenditureBarProps) => {
    const [fixedLabel, setFixedLabel] = useState("Fixed");
    const [spentLabel, setSpentLabel] = useState("Spent");
    const [remainingLabel, setRemainingLabel] = useState("Remaining");

    const total = netExpenditureBarProps.fixed + netExpenditureBarProps.spent + netExpenditureBarProps.remaining;
    let isShowing = false;

    useEffect(() => {
        const updateLabel = () => {
            if(isShowing) {
                setFixedLabel("Fixed");
                setSpentLabel("Spent");
                setRemainingLabel("Remaining");
            } else {
                setFixedLabel(netExpenditureBarProps.fixed.toFixed(2));
                setSpentLabel(netExpenditureBarProps.spent.toFixed(2));
                setRemainingLabel((netExpenditureBarProps.remaining).toFixed(2));
            }
            isShowing = !isShowing;
            setTimeout(updateLabel, 3000);
        }
        
        setTimeout(updateLabel, 3000);
    }, [netExpenditureBarProps]);

    return (
        <ProgressBar className="mx-sm-5 mx-3">
            <ProgressBar striped variant="black" now={(netExpenditureBarProps.fixed/total)*100} key={1} label={fixedLabel}/>
            <ProgressBar variant="slategray" now={(netExpenditureBarProps.spent/total)*100} key={2} label={spentLabel} />
            <ProgressBar variant="white" now={(netExpenditureBarProps.remaining/total)*100} key={3} label={remainingLabel} className="f-black"/>
        </ProgressBar>
    );
}

export default NetExpenditureBar;