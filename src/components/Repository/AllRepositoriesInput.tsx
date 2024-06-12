import React, { useState } from "react"

interface AllRepositoriesProps { 
    setLogin(owner: string): void;
}

const AllRepositoriesInput: React.FC<AllRepositoriesProps> = ({setLogin}) => { 
    const [login, updateLogin] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        setLogin(login); 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Owner" value={login} onChange={(e) => updateLogin(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AllRepositoriesInput;
