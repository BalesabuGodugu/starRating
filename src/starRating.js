import React, { Component } from "react";
import styled from "styled-components";

const StareIcon = styled(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
    >
      <polygon points="11.426 38 13.412 26.422 5 18.223 16.625 16.534 21.823 6 27.022 16.534 38.647 18.223 30.235 26.422 32.221 38 21.823 32.534" />
    </svg>
  );
})``;

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "undefined",
      selectedIndex: ""
    };
  }
  getSelectedIndex(index) {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    let totalStars = this.props.ratings;
    // let starElement = (this.state.selectedIndex>0 && i<this.state.selectedIndex)
    let starElements =
      this.props.ratings.length >= 0
        ? this.props.ratings.map((element, index) => (
            <li
              onClick={() => this.getSelectedIndex(index)}
              value={index}
              key={index}
              className={
                this.state.selectedIndex >= 0 &&
                index <= this.state.selectedIndex
                  ? " fullstar"
                  : " emptystar"
              }
            >
              <StareIcon />
            </li>
          ))
        : "";

    let resultElement =
      this.state.selectedIndex >= 0
        ? totalStars[this.state.selectedIndex]
        : "Rate Me";
    let resultValue = resultElement != undefined ? resultElement.key : "RateMe";

    return (
      <div>
        <h1> Star Rating</h1>
        <ul>{starElements}</ul>
        <p>{resultValue}</p>
      </div>
    );
  }
}

export default StarRating;
