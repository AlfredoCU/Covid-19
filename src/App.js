import React, { Component } from "react";
import InfoGlobal from "./components/InfoGlobal";
import SearchInfo from "./components/SearchInfo";
import CountryInfo from "./components/CountryInfo";
import { Grid } from "@material-ui/core";
import "./App.css";

class App extends Component {
  state = {
    data: [],
  };

  stateData = (dataApi) => {
    this.setState({ data: dataApi });
  };

  getData = async () => {
    let response = await fetch("https://api.covid19api.com/summary");
    let data = await response.json();
    this.stateData(data);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <header className="app-header">
          <h1>COVID-19</h1>
        </header>
        <Grid container direction="row" justify="center" alignItems="center">
          <InfoGlobal
            date={data.Date}
            NewConfirmed={data.Global && data.Global.NewConfirmed}
            TotalConfirmed={data.Global && data.Global.TotalConfirmed}
            NewDeaths={data.Global && data.Global.NewDeaths}
            TotalDeaths={data.Global && data.Global.TotalDeaths}
            NewRecovered={data.Global && data.Global.NewRecovered}
            TotalRecovered={data.Global && data.Global.TotalRecovered}
          />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <SearchInfo Countries={data.Countries} />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <CountryInfo Countries={data.Countries} />
        </Grid>
      </>
    );
  }
}

export default App;
