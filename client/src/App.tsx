import { gql, useQuery } from "@apollo/client";

const USERS_QUERY = gql`
    query ExampleQuery {
        users {
            id
            name
            email
        }
    }
`;

export function App() {
    const { loading, error, data } = useQuery(USERS_QUERY);


    if (loading) {
        return <div>loading...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    console.log(data.users);

    return (
        <div>
            {data.users.map((element, index) => {
                return <div key={index}>{JSON.stringify(element)}</div>
            })}
        </div>
    );
}