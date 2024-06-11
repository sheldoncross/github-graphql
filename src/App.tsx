import { useState } from 'react';
import { useQuery } from '@apollo/client';
import RepositoryInput from './components/Repository/RepositoryInput';
import RepositoryDetails from './components/Repository/RepositoryDetails';
import REPOSITORY from './queries/repository';
import client from './client';

function App() {
    // Define owner and name state variables
    const [owner, setOwner] = useState('');
    const [name, setName] = useState('');

    // Use the useQuery hook to make a graphql query request
    const { loading, error, data } = useQuery(REPOSITORY, {
        variables: { owner, name },
        skip: !owner || !name,
        client
    });


    return (
        <div>
          <h1>GitHub Repository Viewer</h1>

          {/* Pass the setOwner and setName functions to the RepositoryInput component */}
          <RepositoryInput setOwner={setOwner} setName={setName} />

          {/* Display the repository details if the data is available */}
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {data?.repository && <RepositoryDetails repository={data.repository} />}
        </div>
    );
}

export default App;