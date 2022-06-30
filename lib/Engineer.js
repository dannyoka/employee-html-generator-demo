const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(id, name, email, gitHub) {
    super(id, name, email, 'Engineer');
    this.gitHub = gitHub;
  }

  getGithub() {
    return this.gitHub;
  }

  renderSpecificHTML() {
    const input = `<a href="https://www.github.com/${this.getGithub()}">Github</a>`;
    return this.renderBaseHTML(input);
  }
}

module.exports = Engineer;
