import Link from "next/link";
import { useRouter } from "next/router";

export default function params(){
    const router = useRouter();
    const name = router.query.name;
    const teste = router.query.teste;
    console.log(router);

    return (
        <div>
            <h1> Rotas params: {name} e {teste} </h1>

            <Link href="/routes" >Voltar</Link>
        </div>
    );
}