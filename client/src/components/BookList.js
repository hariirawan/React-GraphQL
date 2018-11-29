import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { Card, Icon, Avatar } from 'antd';
import { Row, Col } from 'reactstrap';
const { Meta } = Card;

const getBookQuery = gql`
  {
    books {
      name
      genre
      cover
    }
  }
`;

class BookList extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <Row>
          {this.props.data.loading
            ? 'Loading'
            : this.props.data.books.map((data, key) => {
                console.log(data);
                return (
                  <Col sm={2} key={key}>
                    <Card
                      cover={<img alt="example" src={data.cover} />}
                      actions={[
                        <Icon type="setting" />,
                        <Icon type="edit" />,
                        <Icon type="ellipsis" />
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="http://img.bukabuku.net/product/6/d/6d037b1a368eb5133d54157fc7560528.jpg" />
                        }
                        title={data.name}
                        description={data.genre}
                      />
                    </Card>
                  </Col>
                );
              })}
        </Row>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookList);
