import { FC, useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

interface NetExpenditureBarProps {
    fixedPercent : number,
    spentPercent : number,
    remainingPercent : number
}


const NetExpenditureBar : FC<NetExpenditureBarProps> = (netExpenditureBarProps : NetExpenditureBarProps) => {
    const [fixedLabel, setFixedLabel] = useState("Fixed");
    const [spentLabel, setSpentLabel] = useState("Spent");
    const [remainingLabel, setRemainingLabel] = useState("Remaining");
    let isShowingPercent = false;

    useEffect(() => {
        const updateLabel = () => {
            if(isShowingPercent || netExpenditureBarProps.fixedPercent === 0) {
                setFixedLabel("Fixed");
                setSpentLabel("Spent");
                setRemainingLabel("Remaining");
            } else {
                setFixedLabel(netExpenditureBarProps.fixedPercent.toFixed(2) + "%");
                setSpentLabel(netExpenditureBarProps.spentPercent.toFixed(2) + "%");
                setRemainingLabel((netExpenditureBarProps.remainingPercent).toFixed(2) + "%");
            }
            isShowingPercent = !isShowingPercent;
            setTimeout(updateLabel, 3000);
        }
        
        setTimeout(updateLabel, 3000);
    }, [netExpenditureBarProps]);

    return (
        <ProgressBar className="mx-sm-5 mx-3">
            <ProgressBar striped variant="slategray" now={netExpenditureBarProps.fixedPercent} key={1} label={fixedLabel}/>
            <ProgressBar variant="slategray" now={netExpenditureBarProps.spentPercent} key={2} label={spentLabel} />
            <ProgressBar variant="white" now={netExpenditureBarProps.remainingPercent} key={3} label={remainingLabel} className="f-black"/>
        </ProgressBar>
    );
}

export default NetExpenditureBar;