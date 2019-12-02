import addStayFromAddress from "./addStayFromAddress";
import addStayFromLagLng from "./addStayFromLagLng";
import {IResolvers} from 'graphql-tools';

const mutators: IResolvers = {
    addStayFromAddress, addStayFromLagLng
} as IResolvers;

export default mutators;