import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    userSearch: "",
    kata: "",
  };

  render() {
    const submitChange = async (e) => {
      e.preventDefault();
      await Axios.get(
        `https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/code-challenges/${this.state.userSearch}`
      ).then((response) => {
        console.log(response);
        this.setState({ kata: response.data });
      });
    };

    const handleChange = (e) => {
      this.setState({
        userSearch: e.target.value,
      });
    };

    const renderKata = () => {
      return (
        <ul>
          <li>
            <strong>{this.state.kata.name}</strong>
          </li>
          <li>{this.state.kata.description}</li>
          <li>
            <a href={this.state.kata.url}>{this.state.kata.url}</a>
          </li>
        </ul>
      );
    };

    return (
      <div className="App">
        <h1>CodeWars!</h1>
        <form onSubmit={submitChange}>
          <input type="text" onChange={handleChange} />
        </form>
        {renderKata()}
      </div>
    );
  }
}

export default App;
