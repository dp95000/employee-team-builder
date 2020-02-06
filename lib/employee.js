module.exports = class Employee {
    constructor (name, id, email, title) {
        this._name = name;
        this._id = id;
        this._email = email;
        this._title = title;
    }
    
    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getEmail() {
        return this._email;
    }

    getTitle() {
        return this._title;
    }

    getRole() {
        return this.constructor.name;
    }

}