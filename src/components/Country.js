import React, { Component } from "react";
import "../App.css";
import CountryItem from "./CountryItem";

export class Country extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url = "https://restcountries.com/v3.1/all";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData})
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Waving Countries Flags</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.flags.png}>
                <CountryItem
                  name={element.name.official}
                  capital={element.capital ? element.capital : ""}
                  imageUrl={element.flags.png}
                  Location={element.maps.googleMaps}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Country;
