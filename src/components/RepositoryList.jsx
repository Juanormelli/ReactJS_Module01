import { RepostoryItem } from "./RepositoryItem"

const repository = {
    name:"Teste Juan",
    description:"Teste Teste Juan",
    link: "https://github.com/juanormelli"
}

export function RepositoryList(){
    return (
        <section>
            <h1>Repositories</h1>
            <RepostoryItem repository={repository} />
            <RepostoryItem  repository={repository}/>
            <RepostoryItem repository={repository}/>
            <RepostoryItem repository={repository}/>


        </section>
    )


} 