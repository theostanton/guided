import client from 'api/client'
import {UsersGuidesDocument, UsersGuidesQuery, UsersGuidesQueryVariables} from "api/generated";

export default class GuidesStore {

  username:string

  constructor(username: string) {
    this.username=username
  }

  async fetch():Promise<void>{
    const variables:UsersGuidesQueryVariables={
      username:this.username
    }
    const response = await client.query<UsersGuidesQuery>({
      query:UsersGuidesDocument,
      variables
    })
    if(response.)
  }
}