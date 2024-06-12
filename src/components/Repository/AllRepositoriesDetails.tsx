interface AllRepositoriesDetailsProps {
    repositories: {
        name: string;
        description: string | null;
        url: string;
        stargazerCount: number;
        forkCount: number;
    }[]
}

const AllRepositoriesDetails: React.FC<AllRepositoriesDetailsProps> = ({ repositories }) => {
    return (
        <div>
            {repositories.map((repository, index) => (
                <div key={index}>
                    <h2>{repository.name || 'N/A'}</h2>
                    <p>{repository.description || 'No description available'}</p>
                    <p>
                        <a href={repository.url } target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </p>
                    <p>Stars: {repository.stargazerCount !== null ? repository.stargazerCount : 'N/A'}</p>
                    <p>Forks: {repository.forkCount !== null ? repository.forkCount : 'N/A'}</p>
                </div>
            ))}
        </div>
    );
}

export default AllRepositoriesDetails;