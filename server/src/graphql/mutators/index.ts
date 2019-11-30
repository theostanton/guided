import addStay from "./addStay";
import {IResolvers} from 'graphql-tools';

const mutators :IResolvers = {
    addStay
} as IResolvers;

export default mutators;