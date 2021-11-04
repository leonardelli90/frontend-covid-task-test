import React from "react";

import PatientsList from "./PatientsList";

const Patients = (props) => {

  return (
      <PatientsList items={props.items}/>
  );
};

export default Patients;
