var Customer = /** @class */ (function () {
    function Customer(cId, cName, CAddress) {
        this.cId = cId;
        this.cName = cName;
        this.CAddress = CAddress;
    }
    Customer.prototype.print = function () {
        console.log(this.cId, " : ", this.cName);
    };
    return Customer;
}());
var customer1 = new Customer(1, "Saminda", "Panadura");
customer1.print();
