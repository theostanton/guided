import {IResolvers} from 'graphql-tools';

import Guide from "./Guide";
import Query from "./Query";

const resolvers: IResolvers = {
    Query,
    Guide
};
export default resolvers;