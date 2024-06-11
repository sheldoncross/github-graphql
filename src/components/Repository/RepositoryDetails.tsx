interface RepositoryDetailsProps {
    repository: {
        nameWithOwner: string;
        description: string | null;
        url: string;
        stargazerCount: number;
        forkCount: number;
    }
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({ repository }) => {
    return (
        <div>
            <h2>{repository.nameWithOwner || 'N/A'}</h2>
            <p>{repository.description || 'No description available'}</p>
            <p>
                <a href={repository.url } target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
            </p>
            <p>Stars: {repository.stargazerCount !== null ? repository.stargazerCount : 'N/A'}</p>
            <p>Forks: {repository.forkCount !== null ? repository.forkCount : 'N/A'}</p>
        </div>
    );
}

export default RepositoryDetails