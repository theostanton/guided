## Guided

Guided is a WIP play project to try out some frameworks. Typescript front and back, with a little go.

### Product

[ridersbible.com](https://staging.ridersbible.com) allows a user to plot locations to visit on a prospective travelling tour. 
- **Route** - Uses Google Directions to plot a route between each spot, splitting longer routes by a max numbre of hours to ride at once. 
- **Plan** - Dates, duration, distances, borders and historic temperatures enrich a users route
- **Community** - Sharable public links to a users profile and guides. Follow other users activity. 
- **Track** - Track and share progress along a route. Upload images and other content. 

### Development

###### Docker is used only for local development environment. [docker-compose.builder.yml](/docker-compose.builder.yml) for preparing docker environment, [docker-compose.yml](/docker-compose.yml) for running environment. The local db instance is onsidered throwaway, desired workflow is to always work on fresh database with seed data. So dataset is predictable and common.  

```
make install
make develop
```

#### make install
###### node_modules aren't shared between containers and host, so you'll want to run yarn install on your device for linting within your IDE. 
- Installs npm dependencies for backend and website
- Initial transpilation of backend

#### make develop
###### In development mode the [compute](/backend/element/compute) and [amend_dates](/go/amend_dates) services are triggered via a local GET request. In production mode they're lambdas triggered via SQS events. 
- Initialises local postgres instance with default roles and schema
- Watches backend common source code
- Launches backend services in develop mode, accessible at [localhost:5000/graphiql](localhost:5000/graphiql)
- Launches frontend service in develop mode, accesible at [localhost:8000](https://localhost:80)

### Backend

- [/backend](backend) directory hosts a yarn workspace with number of modules. 
- [@guided/graphql](backend/elements/graphql) is the Backend for Frontend. GraphQL subscriptions powered by Postgraphile. [Playground](https://staging-api.ridersbible.com/graphiql)
- [@guided/compute](backend/elements/compute) is a lambda service. Route computations are handed to [@graphql/compute via SQS events](deploy/config.compute.tf). Uploads geojson files to S3 for mapbox to display. 
- [@guided/spinup](backend/tools/spinup) is a database helper module. The [create](backend/tools/spinup/src/create) directory holds SQL that manages the schema. Postgraphile is enriched via PostgresQL functions, types + row level permissions, including JWT auth. [Database config](deploy/config.database.tf). @guided/spinup executes .sql files by iterating through these directories in [sequence](backend/tools/spinup/src/sequence.ts). 
- [@guided/database](backend/tools/database) uses [@rmp135/sql-ts](https://www.npmjs.com/package/@rmp135/sql-ts) to generate Typescript interface from Postgres DB. 
- [@guided/codegen](backend/tools/codegen) uses [graphql-codegen](https://www.npmjs.com/package/@rmp135/sql-ts) to generate Typescript from GraphQL schema seen in generated.ts(x) files. 
- [/go](go) directory with some simple go modules, including the [amend_dates](/go/amend_dates) microservice 
- Testing via Jest. Would like more test coverage including integration tests paired with a blue/red versioned deployment. 


### Frontend

###### React Native solutilon builds frontend for Web/Android/iOS, thanks to react-native-web. 

Uses react-native-navigation for routing. Mobx for state management. Served by the Graphql BFF. Strict Typescript.

- [frontend/site](frontend/site) holds codebae
- **Mobx** for state management
- **Storybook** for dev workflow
- Served by **GraphQL** BFF
- Strict **Typescript**, interfaces generated from GraphQL schemas
- Responsive layout presents Mobile App layout when viewed on mobile browser
- Native specific code handled via *.native.tsx file naming

### Deploy

- [/deploy](/deploy) directory holds Terraform deployment configuration handled Terraform
- [config.yml](./.circleci/config.yml) holds CircleCI config


### TODO

- [ ] **Infra** Split Terraform environments via AWS accounts rather than workspaces
- [ ] **Testing** Greater test coverage
- [ ] **Infra** Lockdown VPCs
- [ ] **Infra** Logging + monitoring solution
- [ ] **UI** Improve map interaction
- [ ] **UI** Improve Activity feed, follow + sharing
- [ ] **UI** Upload image + description of routes
- [ ] **UI** Design and overhaul UI/UX
- [ ] **Backend** Lockdown public readonly API
- [ ] **Infra** Load test load balancer to understand the weight of GraphQL websockets
- [ ] **Testing** Versioned deployment paired with integration tests
- [ ] **UI** Mobile client 