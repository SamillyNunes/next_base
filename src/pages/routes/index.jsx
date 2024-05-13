import Link from "next/link";
import router, { useRouter } from "next/router";

export default function routes(){

    function simpleNavigation(){
        router.push('/routes/params?id=12&name=Samilly&teste=Nunes')
    }

    function navigateWithParams(){
        router.push({
            pathname: "routes/params",
            query: {
                id: 456,
                name: "Leo",
                teste: "Santos"
            }
        });
    }

    return (
        <div>
            <h1>Rotas index</h1>

            <ul>
                <Link href={"/routes/params?id=12&name=Sam&teste=Leo"} >
                    <li>Params</li>
                </Link>
                
                <Link href={"/routes/123/search"} >
                    <li>Search 123</li>
                </Link>
            </ul>
            <br/><hr/><br/>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }} >
                <button onClick={()=> router.push('/routes/123/search')} >Buscar</button>
                <br/>
                <button onClick={()=>simpleNavigation()} >Buscar params</button>
                <button onClick={navigateWithParams} >Buscar com params</button>

            </div>
        </div>
    );
}