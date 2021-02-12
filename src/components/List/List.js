import React, { Component } from "react";

import { Card, Row, Col } from "antd";

const style = { padding: "8px 0", margin: "10px" };

const { Meta } = Card;

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
          var info = {};
          fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
              info = data;
            })
            .catch((error) => {
              console.error("There was an error!", error);
            });
          console.log(info);
          return (
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt={pokemon.name} src={info.front_default} />}
                >
                  <Meta title={pokemon.name} description={pokemon.url} />
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default List;
