// API for our resources 
exports.api = function(req, res) { 
    res.write('['); 
    res.write('{"resource":"umbrellas", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
}; 
// Handle umbrella create on POST. 
exports.umbrella_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new umbrella(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.colour = req.body.colour; 
    document.prize = req.body.prize; 
    document.height = req.body.height; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 