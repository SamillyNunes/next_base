// ao usar a funcao getStaticProps, tem que ser esse mesmo nome, dizemos para o next que o valor passado por ela
// eh estatico e nao mudara. Nesse caso abaixo, nao muda mesmo que dê um refresh na pagina
export function getStaticProps(){
    return {
        props: {
            number: Math.random()
        }
    };
}

export default function Estatic(props){

    return (
        <div>
            <span>
                Aleatório: {props.number}
            </span>
        </div>
    );
}