const Employee = require('./Employee');

module.exports = class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this._school = school;
    }

    getSchool() {
        return this._school;
    }

    easy() {
        return `
        <div class="col-md-4">
     <div class="employee-card">
            <div class="card-header">
                <h3>${this._name}</h3>
                <h3><i class="fas fa-glasses"></i> Intern</h3>
            </div>
                <div class="card-content">
                    <ul>
                        <li>ID: ${this._id}</li>
                        <li>Email: ${this._email}</li>
                        <li>GitHub: ${this._school}</li>
                    </ul>
             </div>
        </div>
    </div>
        `;
    }

}