import {IResolvers} from 'graphql-tools';

import * as Users from './users'

const resolvers: IResolvers = {
    Query: {
        ...Users
    },
};
export default resolvers;