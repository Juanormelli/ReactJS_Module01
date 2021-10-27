export function RepostoryItem(props){
    return (
        <ul>
                <li>
                    <strong>{props.repository.name ?? 'default'}</strong>
                    <p>{props.repository.description}</p>


                    <a href={props.repository.link}>
                        Acessar Repositorio
                    </a>
                </li>
            </ul>


    )

}