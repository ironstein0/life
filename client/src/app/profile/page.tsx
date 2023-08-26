'use client'

import React from 'react';
import { gql, useQuery } from 'urql';
import { User, UserWhereUniqueInput } from '@life/schema/prisma/typegraphql';

const GetUserQuery = gql`
query GetUser($getUserWhere: UserWhereUniqueInput!) {
    getUser(where: $getUserWhere) {
      username
      philosophy {
        heading
        description
        children {
          heading
        }
        parents {
          heading
        }
      }
    }
  }
`;

export default function Page() {
    const [result] = useQuery<{getUser: User}, {getUserWhere: UserWhereUniqueInput}>({
        query: GetUserQuery,
        variables: {
            getUserWhere: {
                id: 1
            }
        }
    });

    const { error, fetching, data } = result;

    if (fetching) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>error: {error.message}</h1>
    }

    return <h1>username: {data?.getUser.username}</h1>
}
