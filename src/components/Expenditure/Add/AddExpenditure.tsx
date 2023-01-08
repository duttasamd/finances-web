import { FC, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddExpenditure : FC = () => {
    const currentAccountRef = useRef<HTMLSelectElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const commentRef = useRef<HTMLInputElement>(null);

    const formRef = useRef<HTMLFormElement>(null);

    const [isFormDisabled, setFormDisabled] = useState(false);

    const [showAddSuccess, setShowAddSuccess] = useState(false);
    const [errorText, setErrorText] = useState("");

    const addExpenditure = (e : any) => {
        e.preventDefault();
        setFormDisabled(true);

        console.log(`${currentAccountRef.current?.value} -> ${typeRef.current?.value} ${amountRef.current?.value} ${commentRef.current?.value}`);

        const addExpenditureUrl = `${process.env.REACT_APP_FINANCES_API_HOST}/current/${currentAccountRef.current?.value}/buy`;

        const expenditure = {
            type : typeRef.current?.value,
            amount : amountRef.current?.value,
            comment : commentRef.current?.value
        };

        fetch(addExpenditureUrl, {
            method : "put",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(expenditure)
        })
        .then(response=>response.json())
        .then(data => {
            console.log(data);
            formRef.current?.reset();

            setShowAddSuccess(true);
            setTimeout(() => {setShowAddSuccess(false); setFormDisabled(false);}, 2000);
        }).catch(err => {
            setErrorText(`Something went wrong! ${err}`);
            setTimeout(() => {setErrorText(""); setFormDisabled(false);}, 2000);
        });

        return true;
    }

    return (
    <div className="f-white container px-xl-5">
        <h3>Add Expense</h3>
        <div className="mt-3 mt-md-5 input-group">
            <span className="input-group-text">Account</span>
            <select name="" id="" className="form-control" ref={currentAccountRef} disabled={isFormDisabled}>
                <option value="09b0187a-3706-49d0-bf03-f60e2aaab5f0">Amex</option>
                <option value="4927ac87-8df8-4ff8-b2a2-464819c73a7a">Sparkasse</option>
            </select>
        </div>
        <form action="" ref={formRef} onSubmit={addExpenditure}>
            <div className="row mt-3 mt-md-5">
                {
                    showAddSuccess ? (<span className="f-green mt-5"><strong>Expenditure Successfully Added</strong></span>)
                    :
                    (<>
                        <div className="col-md-4">
                            <select name="" id="" className="form-control" ref={typeRef} disabled={isFormDisabled}>
                                <option value="GROCERIES">Groceries</option>
                                <option value="RESTAURANT">Eating Out</option>
                                <option value="PURCHASE">Purchase</option>
                                <option value="SUBSCRIPTION">Subscription</option>
                                <option value="UTILITY">Utilities</option>
                                <option value="INSURANCE">Insurance</option>
                                <option value="TRANSPORT">Transport</option>
                                <option value="MISCELLANEOUS">Miscelleneous</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <input type="number" className="form-control" placeholder="Amount" ref={amountRef} required disabled={isFormDisabled} step=".01"/>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Comment" ref={commentRef} required disabled={isFormDisabled}/>
                        </div>
                        <div className="d-grid mt-4 mt-md-5">
                            <Button variant="outline-light" size="lg" type="submit" disabled={isFormDisabled}>Add</Button>
                        </div>
                    </>)
                }
            </div>
        </form>

        <div className="f-red mt-3">{errorText}</div>
    </div>);
}

export default AddExpenditure;