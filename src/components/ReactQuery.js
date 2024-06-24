import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

 function ReactQuery() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}

function Example() {
    // isLoading or status === 'loading' - The query has no data and is currently fetching
    // isError or status === 'error' - The query encountered an error
    // isSuccess or status === 'success' - The query was successful and data is available
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    )
}

export default ReactQuery;