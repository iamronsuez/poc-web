import React from "react";
import Layout from '../components/admin/layout';
import Dashboard from "../components/admin/dashboard";
import AddService from "../components/admin/service";

import { Route } from "react-router-dom";

function Admin() {
  return (
    <Layout className="Admin-container">
      <Route exact path="/admin/" component={Dashboard} />
      <Route exact path="/admin/:service" component={AddService} />
    </Layout>
  );
}

export default Admin;
