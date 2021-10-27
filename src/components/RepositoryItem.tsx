import React from "react";

interface RepositoryItemProps{
    repository:{
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepostoryItem(props:RepositoryItemProps){
    return (
        
            <li>
                <strong>{props.repository.name ?? 'default'}</strong>
                <p>{props.repository.description ?? "Sem descrição"}</p>


                <a href={props.repository.html_url}>
                        Acessar Repositorio
                </a>
            </li>
        


    )

}