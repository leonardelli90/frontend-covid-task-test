import React from "react";

import "./PatientItem.css";

const PatientItem = (props) => {
  var timestamp = Date.parse(props.Notice);
  var date = new Date(timestamp);

  var status =
    props.Status === 0
      ? "Infected"
      : props.Status === 1
      ? "Recovered"
      : "Deceased";

  return (
      <tr key={props.id}>
        <td>{props.Name}</td>
        <td>{props.Surname}</td>
        <td>{status}</td>
        <td>{date.toLocaleDateString("it-IT")}</td>
      </tr>
  );
};

export default PatientItem;
