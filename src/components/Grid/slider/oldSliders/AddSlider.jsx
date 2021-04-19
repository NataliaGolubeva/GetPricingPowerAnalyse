import React, { Component } from "react";
import styled from "styled-components";
import { Heading } from "@chakra-ui/react";

function AddSlider(props) {
  const { volume, price, costs, cogs, taxes } = props;

  class App extends Component {
    render() {
      return (
        <>
          <div className="App">
            <div className="wrapper">
              <Heading size="sm" my={3} textAlign="center">
                Optimisation in %
              </Heading>
            </div>
          </div>
        </>
      );
    }
  }

  return <App />;
}

export default AddSlider;
