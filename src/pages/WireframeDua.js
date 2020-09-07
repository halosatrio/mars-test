import React, { Component } from "react";
import _ from "lodash";

import ListGroup from "../components/ListGroup";
import ApisTable from "../components/ApisTable";
import Pagination from "../components/Pagination";

import { getAPIs } from "../services/ListAPI";
import { getAuthType } from "../services/ListAuthType";
import { paginate } from "../utils/paginate";
import Button from "../components/Button";

export class WireframeDua extends Component {
  state = {
    apis: [],
    authType: [],
    currentPage: 1,
    pageSize: 7,
    selectedAuthType: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const authType = [{ id: 0, name: "any" }, ...getAuthType()];
    this.setState({ apis: getAPIs(), authType });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleAuthTypeSelect = (authType) => {
    this.setState({
      selectedAuthType: authType,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedAuthType,
      apis: allApis,
      sortColumn,
    } = this.state;

    let filtered = allApis;

    if (selectedAuthType && selectedAuthType.id)
      filtered = allApis.filter((a) => a.authType.id === selectedAuthType.id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const apis = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: apis };
  };

  render() {
    const { length: count } = this.state.apis;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no APIS in the database.</p>;

    const { totalCount, data: apis } = this.getPagedData();

    return (
      <div className="container my-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-3">
            <ListGroup
              items={this.state.authType}
              selectedItem={this.state.selectedAuthType}
              onItemSelect={this.handleAuthTypeSelect}
            />
          </div>
          <div className="col-3">
            <Button type="button" className="btn btn-secondary">
              export
            </Button>
          </div>
          <ApisTable
            apis={apis}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default WireframeDua;
