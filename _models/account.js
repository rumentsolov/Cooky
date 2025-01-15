
class Account extends Object {
  static schema = {
    name: "Account",
    primaryKey: "email",
    properties: {
      email: "string",
      phoneNo: "string",
      givenName: "string",
      familyName: "string",
      address: "string",
      createdAt: "date",
      updatedAt: "date",
      lastLogin: "date",
      emailVerified: "bool",
      basketUpdatedAt: "date",
      basketPurchasedAt: "date",
      totalBasketPrice: "double",
      basketList: "Dish[]",
    },
  };

  constructor({
    email = "example@example.com",
    phoneNo = "-",
    givenName = "-",
    familyName = "-",
    address = "-",
    createdAt = new Date(),
    updatedAt = new Date(),
    lastLogin = new Date(),
    emailVerified = false,
    basketUpdatedAt = new Date(),
    basketPurchasedAt = new Date(),
    totalBasketPrice = 0,
    basketList = [],
  } = {}) {
    super();
    this.email = email;
    this.phoneNo = phoneNo;
    this.givenName = givenName;
    this.familyName = familyName;
    this.address = address;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.lastLogin = lastLogin;
    this.emailVerified = emailVerified;
    this.basketUpdatedAt = basketUpdatedAt;
    this.basketPurchasedAt = basketPurchasedAt;
    this.totalBasketPrice = totalBasketPrice;
    this.basketList = basketList;
  }

  initialize(email) {
    this.email = email;
    this.phoneNo = "0";
    this.givenName = "0";
    this.familyName = "0";
    this.address = "0";
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.lastLogin = new Date();
    this.emailVerified = false;
    this.basketUpdatedAt = new Date();
    this.basketPurchasedAt = new Date();
    this.totalBasketPrice = 0;
  }
}

export default Account;
