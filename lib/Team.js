const fs = require('fs');

class Team {
  constructor() {
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  renderTeamHTML() {
    return this.members
      .map((employee) => employee.renderSpecificHTML())
      .join('');
  }

  renderBaseHTML() {
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <!-- CSS only -->
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossorigin="anonymous"
          />
          <title>Document</title>
        </head>
        <body>
          Hello world!
            ${this.renderTeamHTML()}
        </body>
      </html>
      `;
  }

  saveFile() {
    fs.writeFile('./dist/index.html', this.renderBaseHTML(), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('successfully written');
      }
    });
  }
}

module.exports = Team;
