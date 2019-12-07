import addStayFromAddress from "./addStayFromAddress";
import addStayFromLagLng from "./addStayFromLagLng";
import createUser from "./createUser";
import createGuide from "./createGuide";
import moveStay from "./moveStay";
import {IResolvers} from 'graphql-tools';

const mutators: IResolvers = {
    addStayFromAddress, addStayFromLagLng, moveStay, createUser, createGuide
} as IResolvers;

export default mutators;