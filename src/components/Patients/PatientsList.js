import React from "react";
import Table from "react-bootstrap/Table"

import PatientItem from "./PatientItem";
import "./PatientsList.css";

const PatientsList = (props) => {

  if (props.items.length === 0) {
    return <h2>Found no patient.</h2>;
  }

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Status</th>
            <th>Last modified</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((patient) => (
            <PatientItem
              key={patient.id}
              Name={patient.name}
              Surname={patient.surname}
              Notice={patient.modifiedOn}
              Status={patient.status}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientsList;
