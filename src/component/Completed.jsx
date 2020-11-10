import React, { Component } from "react";
import Axios from "axios";

class Completed extends Component {
  state = {
    userSearch: "",
    completed: [],
  };

  async componentDidMount() {}

  render() {
    const handleChange = (e) => {
      this.setState({
        userSearch: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      await Axios.get(
        `https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/users/${this.state.userSearch}/code-challenges/completed?page=0`
      ).then((response) => {
        console.log(response.data.data);
        this.setState({ completed: response.data.data });
      });
    };

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
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
        </form>
        {renderCompleted()}
      </div>
    );
  }
}

export default Completed;
