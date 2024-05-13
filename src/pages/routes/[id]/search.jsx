import { useRouter } from "next/router";


//criando o nome da pasta entre colchetes, cria-se o dinamismo da rota podendo passar o valor

export default function search(){

    const router = useRouter();
    // inicialmente esse valor da query eh vazio!
    const id = router.query.id;

    console.log(router);

    return (
        <div>
            <h1> Rotas/{id}/buscar!!! </h1>
        </div>
    );
}