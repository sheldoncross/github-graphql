import { useState } from "react";
import buttonStyle from "../styles/Repository/RepositoryStyles";

interface RepositoryInputProps {
    setOwner: (owner: string) => void;
    setName: (repoName: string) => void;
}

const RepositoryInput: React.FC<RepositoryInputProps> = ({setOwner, setName}) => {
    // Define owner and name state variables
    const [owner, updateOwner] = useState('');
    const [name, updateName] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOwner(owner);
        setName(name);
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Owner:</label>
                <input type="text" value={owner} onChange={(e) => updateOwner(e.target.value)} />
                <label>Repository Name:</label>
                <input type="text" value={name} onChange={(e) => updateName(e.target.value)} />
                <button className={buttonStyle.styles} type="submit">Search</button>
            </form>
        </div>
    );
}

export default RepositoryInput;
