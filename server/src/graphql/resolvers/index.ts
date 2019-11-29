import {IResolvers} from 'graphql-tools';

import * as Users from './users'
import * as Guides from './guides'

const resolvers: IResolvers = {
    Query: {
        ...Users,
        ...Guides
    },
};
export default resolvers;