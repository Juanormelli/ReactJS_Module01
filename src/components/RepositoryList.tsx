import { RepostoryItem } from "./RepositoryItem"
import{useState, useEffect} from "react"
import "../styles/repo.scss"
import React from "react"


//https://api.github.com/users/juanormelli/repos

interface Repository{
    name: string;
    description: string;
    html_url: string;

}

export function RepositoryList(){

    const[repositories, setRepositories] = useState<Repository[]>([]) 

    useEffect(()=> {
        fetch("https://api.github.com/users/juanormelli/repos")
        .then(response => response.json())
        .then(data=>setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Repositories</h1>
            <ul> 
                {repositories.map(repository => {
                    return <RepostoryItem key={repository.name} repository={repository} />
                })}
                
                
            </ul>

        </section>
    )


} 