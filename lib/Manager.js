const Employee = require('./Employee');

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email, 'Manager');
    this.officeNumber = officeNumber;
  }
  renderSpecificHTML() {
    return this.renderBaseHTML();
  }
}

module.exports = Manager;
