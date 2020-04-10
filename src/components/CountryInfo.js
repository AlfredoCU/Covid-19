import React from "react";
import {
  Card,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const CountryInfo = ({ Countries }) => {
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
              Countries.map((item, key) => {
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
    </Card>
  );
};

export default CountryInfo;
