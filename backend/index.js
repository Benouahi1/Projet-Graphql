const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const  Nike  =require('./Model/Data.model')

Db = require('./db/db.configue')

const schema = buildSchema(`
  type Query {
    Nike: [Nike]
  }

  type Nike {
    IPR:String!
    Designation:String!
    Status:String!
    Number:String!
    Office:String!
    Owner:String!
  }
`);

const resolvers = {
    Query: {
      Nike: async (root, args, { Nike }) => {
        const nike = await Nike.find();
        return nike;
      }
    }
  }



  


const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
  context: { Nike }
}));

app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});

