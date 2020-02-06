const Employee = require('./Employee');

module.exports = class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this._officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this._officeNumber;
    }

    easy() {
        return `
        <div class="col-md-4">
     <div class="employee-card">
            <div class="card-header">
                <h3>${this._name}</h3>
                <h3><i class="fas fa-glasses"></i> Manager</h3>
            </div>
                <div class="card-content">
                    <ul>
                        <li>ID: ${this._id}</li>
                        <li>Email: ${this._email}</li>
                        <li>GitHub: ${this._officeNumber}</li>
                    </ul>
             </div>
        </div>
    </div>
        `;
    }

}