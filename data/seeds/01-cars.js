// STRETCH
exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        {
          vin: "4Y1SL65848Z411439",
          make: "Honda",
          model: "Civic",
          mileage: 75000,
        },
        {
            vin: "2Y1SB65888Z411439",
            make: "Toyota",
            model: "Camry",
            mileage: 125000,
          }
      ]);
    });
};
