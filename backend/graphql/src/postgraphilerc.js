"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("exporting .postgraphilerc.js");
exports.connection = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
let ownerConnectionString;
if (process.env.OWNER_USER) {
    ownerConnectionString = `postgres://${process.env.OWNER_USER}:${process.env.OWNER_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
}
console.log("connection=" + exports.connection);
console.log("ownerConnectionString=" + ownerConnectionString);
let watchPg, readCache, writeCache = undefined;
if (process.env.POSTGRAPHILE_WATCH === "true") {
    watchPg = true;
    writeCache = "cache";
}
else {
    watchPg = false;
}
exports.host = process.env.POSTGRAPHILE_HOST && process.env.POSTGRAPHILE_HOST.length > 0 ? process.env.POSTGRAPHILE_HOST : undefined;
exports.options = {
    ownerConnectionString,
    jwtSecret: "someSecret",
    jwtPgTypeIdentifier: "guided.jwt_token",
    jwtVerifyOptions: {
        audience: undefined,
    },
    pgDefaultRole: "guided_anonymous",
    watchPg,
    readCache,
    writeCache,
    enableCors: true,
    dynamicJson: true,
    showErrorStack: "json",
    enhanceGraphiql: true,
    graphiql: true,
    allowExplain: true,
    enableQueryBatching: true,
    legacyRelations: "omit",
    appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
};
//# sourceMappingURL=postgraphilerc.js.map