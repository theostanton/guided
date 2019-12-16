import addStayFromAddress from "./addStayFromAddress";
import addStayFromLagLng from "./addStayFromLagLng";
import createUser from "./createUser";
import createGuide from "./createGuide";
import deleteAllStays from "./deleteAllStays";
import moveStay from "./moveStay";
import deleteStay from "./deleteStay";
import {IResolvers} from 'graphql-tools';
import updateStay from "./updateStay";

const mutators: IResolvers = {
    addStayFromAddress, addStayFromLagLng, moveStay, createUser, createGuide, deleteStay, deleteAllStays,updateStay
} as IResolvers;

export default mutators;