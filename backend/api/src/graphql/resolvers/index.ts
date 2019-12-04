import {IResolvers} from 'graphql-tools';

import Guide from "./Guide";
import Query from "./Query";
import Stay from "./Stay";
import Ride from "./Ride";

const resolvers: IResolvers = {
    Query,
    Guide,
    Stay,
    Ride
};
export default resolvers;