import React, { Component } from "react";

import { Card } from "antd";

const { Meta } = Card;

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      front_default: "",
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ front_default: data.sprites.front_default })
      )
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }

  render() {
    return (
      <Card
        hoverable
        style={{ width: 200 }}
        cover={<img alt={this.props.name} src={this.state.front_default} />}
      >
        <Meta
          title={this.props.name.toUpperCase()}
          style={{ textAlign: "center" }}
        />
      </Card>
    );
  }
}

export default Pokemon;
