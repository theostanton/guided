"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
exports.QUERY = apollo_boost_1.gql `
    query GuidesQuery{
        allGuides{
            id
            title
            slug
            user{
                email
                username
            }
            stays{
                location{
                    id
                    label
                    lat
                    long
                }
            }
        }
    }`;
