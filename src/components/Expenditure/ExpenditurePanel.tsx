import { Dispatch, FC, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from '@fortawesome/fontawesome';

import { faS, faPlus, faFileLines, faChartSimple, faCalendar } from '@fortawesome/free-solid-svg-icons';
fontawesome.library.add(faS as any, faPlus as any, faFileLines as any, faChartSimple as any, faCalendar as any)

export interface ExpenditurePanelFunction {
    setPanel : Dispatch<SetStateAction<string>>;
}

const ExpenditurePanel : FC<ExpenditurePanelFunction> = (expenditurePanelFunction) => {

    return (<div className="d-flex mx-sm-5 mx-3 my-3 f-white">
        <div className="w-25"><FontAwesomeIcon icon={["fas","plus"]} onClick={() => expenditurePanelFunction.setPanel("add")}/></div>
        <div className="w-25"><FontAwesomeIcon icon={["fas","file-lines"]} onClick={() => expenditurePanelFunction.setPanel("budget")} /></div>
        <div className="w-25"><FontAwesomeIcon icon={["fas","chart-simple"]} onClick={() => expenditurePanelFunction.setPanel("history")} /></div>
        <div className="w-25"><FontAwesomeIcon icon={["fas","calendar"]} onClick={() => expenditurePanelFunction.setPanel("horizon")} /></div>
    </div>)
}

export default ExpenditurePanel;