import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBookQuery = gql`
   {
      books{
         name,
         genre
      }
   }
`

class BookList extends Component {

   render() {
      console.log(this.props.data);
      return (
         <div>
            <h1> List Book </h1>
            <ul className="book-list">
               {
                  this.props.data.loading ?
                     <div>Loading books....</div> :
                     this.props.data.books.map((data, key) => {
                        return (
                           <li key={key}>{data.name}</li>
                        )
                     })
               }
            </ul>
         </div>
      );
   }
}

export default graphql(getBookQuery)(BookList);