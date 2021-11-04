import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Filters = (props) => {

    const [enteredStatus, setEnteredStatus] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        const filterData = {
            timestamp: enteredDate === "" ? "" : new Date(enteredDate).toJSON(),
            status: enteredStatus
          };
      
          props.onFilterPatients(filterData);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    } 

    const statusChangeHandler = (event) => {
        setEnteredStatus(event.target.value);
    } 

  return (
    <div className="container">
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>From</Form.Label>
                <Form.Control type="date" placeholder="enter date" value={enteredDate} onChange={dateChangeHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStatus" value={enteredStatus} onChange={statusChangeHandler}>
                <Form.Label>Status</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option value="">Select a stutus</option>
                    <option value="0">Infected</option>
                    <option value="1">Recovered</option>
                    <option value="2">Deceased</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  );
};

export default Filters;
