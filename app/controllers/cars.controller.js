const Cars = require('../models/cars.model.js');


exports.getAll = (req, res) => {
    Cars.find()
        .then(oCars => {
            if (oCars.length === 0)
                res.status(204).send(oCars);
            else
                res.status(200).send(oCars)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the cars."
            });
        });
};

exports.getById = (req, res) => {
    Cars.findById(req.params.carsId)
        .then(oCars => {
            if (oCars) {
                res.status(200).send(oCars);
            }
            return res.status(404).send({
                message: "Car does not exist with id " + req.params.carsId
            });
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Car does not exist with id " + req.params.carsId
                });
            }
            return res.status(500).send({
                message: "Some error occurred while retrieving the car with carsId " + req.params.carsId
            });
        });
};


exports.update = (req, res) => {

    if (!req.body.model) {
        return res.status(400).send({
            message: "Please enter car model. It is required"
        });
    }

    if (!req.body.year) {
        return res.status(400).send({
            message: "Please enter year of the car. It is required"
        });
    }

    if (!req.body.price) {
        return res.status(400).send({
            message: "Please enter price of the car. It is required"
        });
    }

    if (!req.body.brand) {
        return res.status(400).send({
            message: "Please enter car brand. It is required"
        });
    }

    let updatedCars = {};

    if (req.body.model) updatedCars.model = req.body.model
    if (req.body.year) updatedCars.year = req.body.year
    if (req.body.price) updatedCars.price = req.body.price
    if (req.body.brand) updatedCars.brand = req.body.brand


    Cars.findByIdAndUpdate(req.params.carsId, { ...updatedCars }, { new: true })
        .then(oCars => {
            if (oCars) {
                res.send(oCars);
            }
            return res.status(404).send({
                message: "Car does not exist with carsId " + req.params.carsId
            });

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Car does not exist with carsId " + req.params.carsId
                });
            }
            return res.status(500).send({
                message: "Some error occurred while updating the car with carsId" + req.params.carsId
            });
        });
};


exports.delete = (req, res) => {
    Cars.findByIdAndRemove(req.params.carsId)
        .then(oCars => {
            if (oCars) {
                res.status(204).send({ message: "Car has been deleted successfully!" });
            }
            return res.status(404).send({
                message: "Car does not exist with carsId" + req.params.carsId
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Car does not exist with carsId" + req.params.carsId
                });
            }
            return res.status(500).send({
                message: "Some error occurred while deleting the car with carsId" + req.params.carsId
            });
        });
};

exports.create = (req, res) => {

    if (!req.body.brand) {
        return res.status(400).send({
            message: "Please enter car brand. It is required"
        });
    }

    if (!req.body.model) {
        return res.status(400).send({
            message: "Please enter car model. It is required"
        });
    }

    if (!req.body.year) {
        return res.status(400).send({
            message: "Please enter year of the car. It is required"
        });
    }

    if (!req.body.price) {
        return res.status(400).send({
            message: "Please enter car type. It is required"
        });
    }


    const cars = new Cars({
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        brand: req.body.brand
    });

    cars.save()
        .then(oCars => {
            res.location('/cars/' + oCars._id)
            res.status(201).send(oCars);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the car."
        });
    });
};