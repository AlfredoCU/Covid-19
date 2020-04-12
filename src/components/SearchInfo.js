import React, { Component } from "react";
import SearchCountryInfo from "./SearchCountryInfo";
import { Card, CardHeader } from "@material-ui/core";

class SearchInfo extends Component {
  state = {
    filterText: "",
  };

  onFilterTextChange = (filterText) => {
    this.setState({ filterText: filterText });
  };

  handleFilterTextChange = (e) => {
    this.onFilterTextChange(e.target.value);
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  render() {
    const rows = [];
    const { filterText } = this.state;
    const Countries = this.props.Countries;

    return (
      <Card className="card card-form">
        <CardHeader
          title="Buscar Información por país"
          subheader="Seleccione un país del que desee conocer confirmados, muertes y recuperados"
        />
        <div className="space">
          <form noValidate>
            <input
              type="text"
              list="data"
              placeholder="Buscar país..."
              value={filterText}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleFilterTextChange}
            />
            <datalist id="data">
              {Countries &&
                Countries.map((item, key) => (
                  <option key={key} value={item.Country} />
                ))}
            </datalist>
          </form>
          <div>
            {Countries &&
              Countries.map((item, key) => {
                if (item.Country.indexOf(filterText) === -1) {
                  return;
                }
                rows.push(<SearchCountryInfo key={key} Countries={item} />);
              })}
            <div>{rows.length > 1 ? "Sin resultados..." : rows}</div>
          </div>
        </div>
      </Card>
    );
  }
}

export default SearchInfo;

/*

import React, { Component } from "react";
import { Card, CardHeader } from "@material-ui/core";

class SearchInfo extends Component {
  constructor(props) {
    super(props);
  }

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  render() {
    const { filterText, Countries } = this.props;

    return (
      <Card className="card card-form">
        <CardHeader
          title="Buscar Información por país"
          subheader="Seleccione un país del que desee conocer confirmados, muertes y recuperados"
        />
        <div className="space">
          <form noValidate>
            <input
              type="text"
              list="data"
              placeholder="Buscar país..."
              value={filterText}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleFilterTextChange}
            />
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
  }
}

export default SearchInfo;

*/
