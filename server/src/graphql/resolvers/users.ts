import {IFieldResolver} from "graphql-tools";
import {User} from "../../types";
import {Resolver} from "./types";

export const allUsers: Resolver<User[]> = (_: void, args: void) => {
    return [
        {
            email: 'some@email.com',
            id: 'someId'
        }
    ];
};
export const user: Resolver<User> = (_: void, args: { id: string }) => {
    return {
        email: 'some@email.com',
        id: 'someId'
    }
};