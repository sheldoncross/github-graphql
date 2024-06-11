import { useState } from 'react';
import { useQuery } from '@apollo/client';
import RepositoryInput from '../components/Repository/RepositoryInput';
import RepositoryDetails from '../components/Repository/RepositoryDetails';
import REPOSITORY from '../queries/repository';
import { Link } from 'react-router-dom';
import client from '../client';

const Home: React.FC = () => {
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
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="/repos">Repositories</Link>
                <Link to="/users">Users</Link>
                <Link to="/organizations">Organizations</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/languages">Languages</Link>
                <Link to="/contributors">Contributors</Link>
                <Link to="/issues">Issues</Link>
                <Link to="/pulls">Pull Requests</Link>
                <Link to="/commits">Commits</Link>
                <Link to="/branches">Branches</Link>
                <Link to="/releases">Releases</Link>
                <Link to="/tags">Tags</Link>
                <Link to="/deployments">Deployments</Link>
                <Link to="/workflows">Workflows</Link>
                <Link to="/packages">Packages</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/milestones">Milestones</Link>
                <Link to="/labels">Labels</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/members">Members</Link>
                <Link to="/issues">Issues</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/pulls">Pull Requests</Link>
                <Link to="/commits">Commits</Link>
                <Link to="/branches">Branches</Link>
                <Link to="/releases">Releases</Link>
                <Link to="/tags">Tags</Link>
                <Link to="/deployments">Deployments</Link>
                <Link to="/workflows">Workflows</Link>
                <Link to="/packages">Packages</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/milestones">Milestones</Link>
                <Link to="/labels">Labels</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/members">Members</Link>
                <Link to="/issues">Issues</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/pulls">Pull Requests</Link>
                <Link to="/commits">Commits</Link>
                <Link to="/branches">Branches</Link>
                <Link to="/releases">Releases</Link>
                <Link to="/tags">Tags</Link> */}
            </nav>
            {/* Pass the setOwner and setName functions to the RepositoryInput component */}
            <RepositoryInput setOwner={setOwner} setName={setName} />

            {/* Display the repository details if the data is available */}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data?.repository && <RepositoryDetails repository={data.repository} />}
        </div>
    );
}

export default Home;