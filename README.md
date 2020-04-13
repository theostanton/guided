## Guided

Guided is a WIP play project to try out some frameworks. Typescript front and back. 

### Product

[ridersbible.com](staging.ridersbible.com) allows a user to plot locations to visit on a prospective travelling tour. 
- **Route** - Uses Google Directions to plot a route between each spot, splitting longer routes by a max numbre of hours to ride at once. 
- **Plan** - Dates, duration, distances, borders and historic temperatures enrich a users route
- **Community** - Sharable public links to a users profile and guides. Follow other users activity. 
- **Track** - Track and share progress along a route. Upload images and other content. 


### Backend

- [/backend](backend) directory hosts a yarn workspace with number of modules. 
- [@guided/graphql](backend/elements/graphql) is the Backend for Frontend. GraphQL subscriptions powered by Postgraphile. [Playground](staging-api.ridersbible.com/graphiql)
- [@guided/compute](backend/elements/compute) is a lambda service. Route computations are handed to [@graphql/compute via SQS events](deploy/config.compute.tf). Uploads geojson files to S3 for mapbox to display. 
- [@guided/spinup](backend/tools/spinup) is a database helper module. The [create](backend/tools/spinup/src/create) directory holds SQL that manages the schema. Postgraphile is enriched via PostgresQL functions, types + row level permissions, including JWT auth. [Database config](deploy/config.database.tf). @guided/spinup executes .sql files by iterating through these directories in [sequence](backend/tools/spinup/src/sequence.ts). 
- [@guided/database](backend/tools/database) uses [@rmp135/sql-ts](https://www.npmjs.com/package/@rmp135/sql-ts) to generate Typescript interface from Postgres DB. 
- [@guided/codegen](backend/tools/codegen) uses [graphql-codegen](https://www.npmjs.com/package/@rmp135/sql-ts) to generate Typescript from GraphQL schema seen in generated.ts(x) files. 
- Testing via Jest. Would like more test coverage including integration tests paired with a blue/red versioned deployment. 


### Frontend

- [@guided/website](frontend/website) is main website, can be seen at [staging.ridersbible.com](https://staging.ridersbible.com). Gatsby + Typescript hosted on [S3 via Cloudfront](deploy/config.site.tf). Uses [Semantic UI](https://semantic-ui.com/) cause my CSS is weak. 
- [@guided/mobile](frontend/mobile) is currently empty. Plans for either native Android or React Native client. For quick updates and tracking progress via location updates.


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