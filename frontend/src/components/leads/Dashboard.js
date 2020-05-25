import React, { Fragment } from "react";
import Leads from "./Leads";
import Form from "./Form";

const Dashboard = () => {
  return (
    <div>
      <Fragment>
        <Form />
        <Leads />
      </Fragment>
    </div>
  );
};

export default Dashboard;
