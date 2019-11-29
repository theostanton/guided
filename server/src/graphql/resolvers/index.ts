import {IResolvers} from 'graphql-tools';

import Guide from "./Guide";
import Query from "./Query";
import Stay from "./Stay";
import Spot from "./Spot";
import Ride from "./Ride";

const resolvers: IResolvers = {
    Query,
    Guide,
    Stay,
    Spot,
    Ride
};
export default resolvers;