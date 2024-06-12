import React, { useState } from 'react';
import NavBar from "../components/Navbar/Navbar"
import AllRepositoriesInput from '../components/Repository/AllRepositoriesInput';
import AllRepositoriesDetails from '../components/Repository/AllRepositoriesDetails';
import { REPOSITORIES } from "./../queries/repository";
import { useQuery } from "@apollo/client";
import client from "./../client";

const Repositories: React.FC = () => {
    const [login, setLogin] = useState('');

    const { loading, error, data } = useQuery(REPOSITORIES, {
        variables: { login: login },
        skip: !login,
        client
    });

    return (
        <div>
            <h1>Repositories</h1>
            <NavBar />
            <AllRepositoriesInput setLogin={setLogin} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data?.user?.repositories && <AllRepositoriesDetails repositories={data.user.repositories.nodes} />}
        </div>
    )
}

export default Repositories;