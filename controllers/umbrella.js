var umbrella = require('../models/umbrella'); 

// for a specific umbrella.
exports.umbrella_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await umbrella.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
 
// List of all umbrellas 
exports.umbrella_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella list'); 
}; 
 
/*for a specific umbrella. 
exports.umbrella_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella detail: ' + req.params.id); 
}; */
 
//Handle umbrella create on POST. 
exports.umbrella_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella create POST'); 
}; 
 
/* Handle umbrella delete form on DELETE. 
exports.umbrella_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella delete DELETE ' + req.params.id); 
}; */

// Handle umbrella delete on DELETE.
exports.umbrella_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await umbrella.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

/* Handle umbrella update form on PUT. 
exports.umbrella_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella update PUT' + req.params.id); 
};*/
//Handle umbrella update form on PUT.
exports.umbrella_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await umbrella.findById( req.params.id)
 // Do updates of properties
 if(req.body.colour)
 toUpdate.colour = req.body.colour;
 if(req.body.price) toUpdate.price = req.body.price;
 if(req.body.size) toUpdate.height = req.body.height;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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
// VIEWS 
// Handle a show all view 
exports.umbrella_view_all_Page = async function(req, res) { 
    try{ 
        theumbrellas = await umbrella.find(); 
        res.render('umbrella', { title: 'umbrella Search Results', results: theumbrellas }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle umbrella create on POST. 
exports.umbrella_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new umbrella(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
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

// Handle a show one view with id specified by query
exports.umbrella_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await umbrella.findById( req.query.id)
    res.render('umbrelladetail',
   { title: 'umbrella Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a umbrella.
// No body, no in path parameter, no query.
// Does not need to be async
exports.umbrella_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('umbrellacreate', { title: 'umbrella Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a umbrella.
// query provides the id
exports.umbrella_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await umbrella.findById(req.query.id)
    res.render('umbrellaupdate', { title: 'umbrella Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query
exports.umbrella_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await umbrella.findById(req.query.id)
    res.render('umbrelladelete', { title: 'umbrella Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };