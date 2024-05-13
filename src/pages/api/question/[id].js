export default function question(req, res){
    if(req.method==="GET"){
        get(req, res);
    } else {
        // 405 eh method not allowed
        req.status(405).send();
    }
}

function get(req, res){
    const id = req.query.id;

    res.status(200).json({
        id, //quando coloca so o valor, fica chave e valor "igual"
        question: "Qual é a sua cor preferida?",
        answers: [
            'Branca', 'Amarela', 'Rosa', 'Verde'
        ],
    });
}