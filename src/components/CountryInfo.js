import React, { useState } from "react";
import {
  Card,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";

const CountryInfo = ({ Countries }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card className="card card-form-table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Países</TableCell>
              <TableCell>Nuevos confirmado</TableCell>
              <TableCell>Total confirmado</TableCell>
              <TableCell>Nuevas muertes</TableCell>
              <TableCell>Muertes totales</TableCell>
              <TableCell>Nuevos recuperado</TableCell>
              <TableCell>Total recuperado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Countries &&
              Countries.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((item, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell>{item.Country}</TableCell>
                    <TableCell>{item.NewConfirmed}</TableCell>
                    <TableCell>{item.TotalConfirmed}</TableCell>
                    <TableCell>{item.NewDeaths}</TableCell>
                    <TableCell>{item.TotalDeaths}</TableCell>
                    <TableCell>{item.NewRecovered}</TableCell>
                    <TableCell>{item.TotalRecovered}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage="Páginas: "
        rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
        component="div"
        count={Countries && Countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default CountryInfo;

/*

import React, { Component } from "react";
import {
  Card,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";

class CountryInfo extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    page: 0,
    rowPerPage: 5,
  };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowPerPage: +event.target.value });
  };

  render() {
    const Countries = this.props.Countries;
    const { page, rowsPerPage } = this.state;

    return (
      <Card className="card card-form-table">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Países</TableCell>
                <TableCell>Nuevos confirmado</TableCell>
                <TableCell>Total confirmado</TableCell>
                <TableCell>Nuevas muertes</TableCell>
                <TableCell>Muertes totales</TableCell>
                <TableCell>Nuevos recuperado</TableCell>
                <TableCell>Total recuperado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Countries &&
                Countries.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((item, key) => {
                  return (
                    <TableRow key={key}>
                      <TableCell>{item.Country}</TableCell>
                      <TableCell>{item.NewConfirmed}</TableCell>
                      <TableCell>{item.TotalConfirmed}</TableCell>
                      <TableCell>{item.NewDeaths}</TableCell>
                      <TableCell>{item.TotalDeaths}</TableCell>
                      <TableCell>{item.NewRecovered}</TableCell>
                      <TableCell>{item.TotalRecovered}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          labelRowsPerPage="Páginas: "
          rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
          component="div"
          count={Countries && Countries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={(event, newPage) => this.handleChangePage(event, newPage)}
          onChangeRowsPerPage={(event) => this.handleChangeRowsPerPage(event)}
        />
      </Card>
    );
  }
}

export default CountryInfo;

*/
