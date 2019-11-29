import {IResolvers} from 'graphql-tools';

import * as Users from './users'
import * as Guides from './guides'
import Guide from "./Guide";

const resolvers: IResolvers = {
    Query: {
        ...Users,
        ...Guides
    },
    Guide
};
export default resolvers;