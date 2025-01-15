class Dish {
    constructor({
      id = generateId(),
      name = "",
      pcs = 0,
      price = 0.0,
      description = "",
      timeForCooking = 0,
      picture = "",
    } = {}) {
      this.id = id; // Unique identifier
      this.name = name;
      this.pcs = pcs;
      this.price = price;
      this.description = description;
      this.timeForCooking = timeForCooking;
      this.picture = picture;
    }
  }
  