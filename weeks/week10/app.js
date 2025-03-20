
function makeCar() {
    let makes = ["Chevy", "GM", "Fiat", "Ford"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["Red", "Blue", "Tan", "Yello", "Green", "White"];
    let roofs = [true, false];

    let randMakes = Math.floor(Math.random() * makes.length);
    let randModel = Math.floor(Math.random() * models.length);
    let randYear = Math.floor(Math.random() * years.length);
    let randColor = Math.floor(Math.random() * colors.length);
    let randRoof = Math.floor(Math.random() * roofs.length);

    let car = {
        make: makes[randMakes],
        model: models[randModel],
        year: years[randYear],
        color: colors[randColor],
        roof: roofs[randRoof],
        started: false,
        toggleEngine: function() {
            this.started = !this.started
            // console.log(this.started)
        }
    };

    return car;
}

function displayCar(car) {
    console.log("Car info: " + car.year, car.make, car.model);
}

let my_car = makeCar()
displayCar(my_car);
my_car.toggleEngine();
my_car.toggleEngine();
my_car.toggleEngine();