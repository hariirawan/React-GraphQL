const graphql = require('graphql');
const _ = require('lodash');
const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLSchema,
   GraphQLID,
   GraphQLInt,
   GraphQLList
} = graphql;

//Data dummy
var Book = [
   { name: "React JS", genre: "Front End", id: "1", authorId: "1" },
   { name: "Vue JS", genre: "Front End", id: "2", authorId: "2" }
]

var Author = [
   { name: "Hari Irawan", age: 3, id: "1" },
   { name: "Zulhan Arif", age: 3, id: "2" }
]

const BookType = new GraphQLObjectType({
   name: 'Book',
   fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
         type: AuthorType,
         resolve(parent, args) {
            return _.find(Author, { id: parent.authorId });
         }
      }
   })
});

const AuthorType = new GraphQLObjectType({
   name: 'Author',
   fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      books: {
         type: new GraphQLList(BookType),
         resolve(parent, args) {
            return _.filter(Book, { authorId: parent.id })
         }
      }
   })
})

const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
   fields: () => ({
      book: {
         type: BookType,
         args: { id: { type: GraphQLID } },
         resolve(parent, args) {
            return _.find(Book, { id: args.id });
         }
      },
      author: {
         type: AuthorType,
         args: { id: { type: GraphQLID } },
         resolve(parent, args) {
            return _.find(Author, { id: args.id });
         }
      },
      books: {
         type: new GraphQLList(BookType),
         resolve(parent, args) {
            return Book;
         }
      },
      authors: {
         type: new GraphQLList(AuthorType),
         resolve(parent, args) {
            return Author;
         }
      }
   })
})

module.exports = new GraphQLSchema({
   query: RootQuery
});