import React, { Component } from "react";

import Table from "./Table";

class ApiTable extends Component {
  columns = [
    {
      path: "api",
      label: "API",
    },
    { path: "description", label: "Description" },
    { path: "authType.name", label: "Auth" },
    { path: "https", label: "HTTPS" },
  ];

  render() {
    const { apis, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={apis}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ApiTable;
