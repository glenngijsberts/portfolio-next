import * as Types from '../types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetPageInfoQueryVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;


export type GetPageInfoQuery = { __typename?: 'Query', website?: { __typename?: 'Website', title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'WebsiteDescription', json: any } | null } | null };


export const GetPageInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPageInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"website"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]} as unknown as DocumentNode<GetPageInfoQuery, GetPageInfoQueryVariables>;