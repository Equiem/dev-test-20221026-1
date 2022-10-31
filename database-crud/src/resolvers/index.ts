import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import type { Context } from "../Context";
import type { Resolvers } from "../schema/types";
import { Query } from "./Query";
import { Mutation } from "./Mutation";

const resolverMap = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value as string); // value from the client
        },
        serialize(value) {
            return (value as Date).getTime(); // value sent to the client
        },
        // @ts-ignore
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
            return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        },
    })
};

export const resolvers: Resolvers<Context> = {
  ...resolverMap,
  Query,
  Mutation,
};
