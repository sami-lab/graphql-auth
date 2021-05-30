const graphql = require('graphql');
const { GraphQLString, GraphQLObjectType } = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, req) {
        ///the key takeway is pass all required options to ohelper function
        return AuthService.signup({
          email: args.email,
          password: args.password,
          req,
        });
      },
    },
  },
});

module.exports = mutation;
