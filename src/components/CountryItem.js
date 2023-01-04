import React, { Component } from 'react';


export class CountryItem extends Component {
 
  render() {
    let {name, capital, imageUrl, Location} = this.props;
    return (
      <div className='my-2'>
        <div className="card" style={{width: "20rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{capital}</p>
        <a href={Location}  className="btn btn-secondary">Details</a>
        </div>
        </div>
      </div>
    )
  }
}

export default CountryItem