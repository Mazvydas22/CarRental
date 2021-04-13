module.exports = (app) => {
    const cars = require('../controllers/cars.controller.js');

    app.post('/cars', cars.create);

    app.get('/cars', cars.getAll);

    app.get('/cars/:carsId', cars.getById);

    app.put('/cars/:carsId', cars.update);

    app.delete('/cars/:carsId', cars.delete);
}
