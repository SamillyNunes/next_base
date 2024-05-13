import Link from "next/link";

export default function routes(){
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
        </div>
    );
}