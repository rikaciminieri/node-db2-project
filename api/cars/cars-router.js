// DO YOUR MAGIC
const router = require("express").Router();

const {
  checkCarId,
  checkVinNumberUnique,
  checkCarPayload,
  checkVinNumberValid,
} = require("./cars-middleware");

const Cars = require("./cars-model");

router.get("/", (req, res, next) => {
  Cars.getAll().then((cars) => {
    res.status(200).json(cars);
  });
});

router.get("/:id", checkCarId, (req, res, next) => {
  res.status(200).json(req.car);
});

router.post("/", checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
  Cars.create(req.body)
    .then((newCar) => {
      res.status(201).json(newCar);
    })
    .catch(next);
});

module.exports = router;
