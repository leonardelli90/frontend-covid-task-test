import React, { useState, useEffect } from "react";

import Patients from "./components/Patients/Patients";
import Filters from "./components/Filters/Filters";

const App = () => {
  const [patients, setPatients] = useState();
  const [isLoading, setLoading] = useState(true);

  async function fetchMyAPI() {
    const response = await fetch("/api/patients");
    const data = await response.json();
    setPatients(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const filterPatientHandler = async (filter) => {
    if (filter.date === null){
      filter.date = '';
    }
    if (filter.status === null) {
      filter.status = '';
    }

    var queryString =Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    const response = await fetch(`/api/patients/filter/?${queryString}`);
    const filteredPatients = await response.json();
    setPatients(filteredPatients);
    setLoading(false);
    
  };

  if (isLoading) {
    return <div>is loading...</div>;
  }
  return (
    <div>
      <h1>Covid cases</h1>
      <Filters onFilterPatients={filterPatientHandler}></Filters>
      <div>
        <Patients items={patients} />
      </div>
    </div>
  );
};

export default App;
