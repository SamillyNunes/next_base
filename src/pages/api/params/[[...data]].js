/// Quando utilizamos os tres pontos  "[...data]" significa que podera vir mais de um no endpoint, ex: sami/123/ruatal
/// Quando envolvemos em duplo colchetes, significa que os parametros sao opcionais
export default function params(req, res){
    res.status(200).json({
        params: req.query,
    });
}