import React, { Component } from "react";

import { Layout, Breadcrumb, Image } from "antd";

import List from "../List/List";

import "./App.css";

import logo from "../../assets/pokemon-png-logo.png";

const { Header, Content, Footer } = Layout;

const style = { background: "#0092ff", padding: "8px 0", margin: "10px" };

class App extends Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Image width="150px" src={logo} />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Pokédex</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <List />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Pokédex Antd ©2021 Created by Lucas Linhares
        </Footer>
      </Layout>
    );
  }
}

export default App;
