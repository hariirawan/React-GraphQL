import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { configApi } from './helper/config-api';
import BookList from './components/BookList';
import './index.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        {/* <div className="App">
        </div> */}
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Book List</Menu.Item>
            <Menu.Item key="2">Authors</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: '80vh' }}>
            <ApolloProvider client={configApi}>
              <BookList />
            </ApolloProvider>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2018 Created by Hari Irawan
        </Footer>
      </Layout>
    );
  }
}

export default App;
