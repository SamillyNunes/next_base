export default function method(req, res){
    if(req.method==="GET"){
        res.status(200).json({
            method: req.method,
            name: "Maria"
        });
    } else {
        res.status(200).json({
            method: req.method,
            name: "Pedro"
        });
    }

}