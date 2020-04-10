import React from "react";
import { Card, CardHeader } from "@material-ui/core";

const SearchInfo = ({ Countries }) => {
  return (
    <Card className="card card-form">
      <CardHeader
        title="Buscar Información por país"
        subheader="Seleccione un país del que desee conocer confirmados, muertes y recuperados"
      />
      <div className="space">
        <form noValidate>
          <input type="text" list="data" />
          <datalist id="data">
            {Countries &&
              Countries.map((item, key) => (
                <option key={key} value={item.Country} />
              ))}
          </datalist>
        </form>
      </div>
    </Card>
  );
};

export default SearchInfo;
