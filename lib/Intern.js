const Employee = require('./Employee');

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email, 'Intern');
    this.school = school;
  }
  renderSpecificHTML() {
    return this.renderBaseHTML();
  }
}

module.exports = Intern;
