var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/prueba-jade', function(req, res){
  res.render('index');
});

router.get('/about', function(req, res){
  res.render('about');
});

router.get('/contact', function(req, res){
    res.render('contact');
});

router.get('/products', function(req, res){
    res.render('products',
        {productos: [{ "id": "1", "name":"Desarrollo Móvil", "image": "/images/movil.jpg" },
                { "id": "2", "name": "Desarrollo Web", "image": "/images/web.png" },
                { "id": "3", "name": "Desarrollo de videojuegos", "image": "/images/videojuegos.png" },
                { "id": "4", "name": "Soluciones tecnologicas", "image": "/images/play.jpg" } ]});
});

router.post('/confirmation', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var birthdate = req.body.birthdate;
    var message = req.body.message;
    console.log("-------------------------NOMBRE-------------------------");
    console.log(name)
    console.log("-------------------------NOMBRE-------------------------");
    res.render('confirmation', {name: name,
        email: email,
        phone: phone,
        birthdate: birthdate,
        message: message
    });
});

module.exports = router;
