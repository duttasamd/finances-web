import { FC, useState } from "react";
import { Card, Collapse, ProgressBar } from "react-bootstrap";
import Expenditure, { ExpenditureInfo } from "./Expenditure";

export interface BreakUpInfo {
    type : string,
    budget : number,
    spent : number,
    expenditures : ExpenditureInfo[],
    bg : string
}

const BreakUp : FC<BreakUpInfo> = (breakUpInfo) => {
    const [open, setOpen] = useState(false);

    let count : number = 0;

    const expenditures = breakUpInfo.expenditures.map((expenditureInfo) => {
        count++;
        return (<div className="" key={count}>
                <Expenditure{...expenditureInfo}></Expenditure>
                {count == breakUpInfo.expenditures.length ? null : <hr className="f-black my-0 mx-3" /> }
            </div>
        )
    });

    const spentPercent = (breakUpInfo.spent / breakUpInfo.budget) * 100;
    
    return (
        <Card className="mx-sm-5 mx-3 f-white">
            <Card.Header onClick={() => setOpen(!open)} className="d-flex bg-black">
                <div className="me-auto">{breakUpInfo.type}</div>
                {/* <ProgressBar variant="slategray" now={spentPercent} className="ms-auto w-25 mt-1"/> */}
                <div className="ms-1">{breakUpInfo.spent.toFixed(2)} / {breakUpInfo.budget}</div>
            </Card.Header>
            <Collapse in={open} >
                <div>
                    {
                        expenditures
                    }
                </div>
            </Collapse>
        </Card>
    )
}

export default BreakUp;