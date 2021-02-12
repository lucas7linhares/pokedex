import React, { Component } from "react";

import Card from "../Card/Card";

import { Row, Col } from "antd";

const style = { padding: "8px 0", margin: "10px" };

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1118,
      next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
      previous: null,
      results: [
        {
          name: "-",
          url: "-",
          sprites: {},
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => this.setState({ results: data.results }))
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }

  render() {
    return (
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {this.state.results.map(function (pokemon, i) {
          return (
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <Card name={pokemon.name} url={pokemon.url} />
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default List;
