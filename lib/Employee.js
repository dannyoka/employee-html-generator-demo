class Employee {
  constructor(id, name, email, position) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.position = position;
  }

  renderBaseHTML(input) {
    return `<div class="card">
      <div class="card-body">
        <div class="card-title">${this.name}</div>
        <div class="card-subtitle">${this.position}</div>
        <div class="card-text">
          <a href="mailto:${this.email}">Email</a>
          ${input}
        </div>
      </div>
    </div>`;
  }

  renderSpecificHTML() {
    return;
  }
}

module.exports = Employee;
