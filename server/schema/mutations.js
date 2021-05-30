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
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, req) {
        ///the key takeway is pass all required options to ohelper function
        return AuthService.login({
          email: args.email,
          password: args.password,
          req,
        });
      },
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
  },
});

module.exports = mutation;
