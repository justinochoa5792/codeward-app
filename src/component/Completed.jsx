import React, { Component } from "react";
import Axios from "axios";

class Completed extends Component {
  state = {
    completed: [],
  };

  async componentDidMount() {
    await Axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/users/justinochoa5792/code-challenges/completed?page=0"
    ).then((response) => {
      console.log(response.data.data);
      this.setState({ completed: response.data.data });
    });
  }

  render() {
    const renderCompleted = () => {
      return this.state.completed.map((kata) => {
        return (
          <ul>
            <li>
              <strong>name of kata: </strong>
              {kata.name}
            </li>
            <li>
              {" "}
              <strong>languages: </strong>
              {kata.completedLanguages}
            </li>
          </ul>
        );
      });
    };
    return (
      <div className="completed">
        <h1>Completed Katas</h1>
        {renderCompleted()}
      </div>
    );
  }
}

export default Completed;
