import { Context } from "model/context"

import { DocumentNode } from "graphql"
import { ExtensionDefinition } from "graphile-utils/node8plus/makeExtendSchemaPlugin"

type ResolverType = "Mutation" | "Query"

export type AnyResolver = Resolver<any, Result>

export interface PluginProvider {
  plugin(): ExtensionDefinition
}

export interface Result {
  success: boolean
  message?: string | null
}

export interface MutationResult extends Result {
}

export interface QueryResult extends Result {
}

export abstract class Resolver<Args, R extends Result> implements PluginProvider {
  abstract type: ResolverType
  abstract name: string
  abstract typeDefs: DocumentNode

  abstract async resolver(_: any, args: Args, context: Context): Promise<R>

  plugin(): ExtensionDefinition {
    return {
      typeDefs: this.typeDefs,
      resolvers: {
        [this.type]: {
          [this.name]: this.resolver,
        },
      },
    }
  }
}

export abstract class Mutation<Args, Result extends MutationResult> extends Resolver<Args, Result> {
  type: ResolverType = "Mutation"
}

export abstract class Query<Args, Result extends QueryResult> extends Resolver<Args, Result> {
  type: ResolverType = "Query"
}

export type AnySimplerResolver = SimpleResolver<any, Result>

export type SimpleResolver<Args, R extends Result> = {
  name: string
  type: ResolverType
  typeDefs: DocumentNode
  resolver: (_: any, args: Args, context: Context) => Promise<R>
}

export abstract class ResolverGroup implements PluginProvider {

  abstract resolvers(): (AnyResolver | AnySimplerResolver)[]

  plugin(): ExtensionDefinition {

    const subresolvers = this.resolvers()

    const resolvers: { [type in ResolverType]: { [name in string]: (_: any, args: any, context: Context) => Promise<Result> } } = {
      Mutation: {},
      Query: {},
    }

    subresolvers.forEach(resolver => {
      resolvers[resolver.type][resolver.name] = resolver.resolver
    })

    const typeDefs = subresolvers.map(resolver => resolver.typeDefs)

    return {
      typeDefs,
      resolvers,
    }
  }
}