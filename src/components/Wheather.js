import React from "react";

const Wheather = props => (
    <div>
        {props.city && this.props.country && <p>Location: {props.city}, {this.props.country}</p>}
        {props.tempereature && <p>Temperature: {props.tempereature} </p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditions: {props.humidity}</p >}
        {props.error && <p>{props.error}</p>}
    </div>

);
export default Wheather;