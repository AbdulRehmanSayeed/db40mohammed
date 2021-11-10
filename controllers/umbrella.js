var umbrella = require('../models/umbrella'); 
 
// List of all umbrellas 
exports.umbrella_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella list'); 
}; 
 
// for a specific umbrella. 
exports.umbrella_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella detail: ' + req.params.id); 
}; 
 
// Handle umbrella create on POST. 
exports.umbrella_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella create POST'); 
}; 
 
// Handle umbrella delete form on DELETE. 
exports.umbrella_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella delete DELETE ' + req.params.id); 
}; 
 
// Handle umbrella update form on PUT. 
exports.umbrella_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella update PUT' + req.params.id); 
}; 

// List of all umbrellas 
exports.umbrella_list = async function(req, res) { 
    try{ 
        theumbrellas = await umbrella.find(); 
        res.send(theumbrellas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 