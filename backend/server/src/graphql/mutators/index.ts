import addStayFromAddress from "./addStayFromAddress";
import addStayFromLagLng from "./addStayFromLagLng";
import moveStay from "./moveStay";
import {IResolvers} from 'graphql-tools';

const mutators: IResolvers = {
    addStayFromAddress, addStayFromLagLng,moveStay
} as IResolvers;

export default mutators;