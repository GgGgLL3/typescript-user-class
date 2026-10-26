class User {
  private _name: string;
  private _login: string;
  private _password: string;
  static count: number = 0;

  constructor(name: string, login: string, password: string) {
    this._name = name;
    this._login = login;
    this._password = password;
    User.count++;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get login(): string {
    return this._login;
  }
  set login(_: string) {
    throw new Error("Ошибка: нельзя изменять логин");
  }

  get password(): string {
    return "********";
  }
  set password(value: string) {
    this._password = value;
  }

  showInfo(): void {
    console.log(`Name: ${this._name}, Login: ${this._login}`);
  }
}

class SuperUser extends User {
  private _role: string;
  static count: number = 0;

  constructor(name: string, login: string, password: string, role: string) {
    super(name, login, password);
    this._role = role;
    User.count--;
    SuperUser.count++;
  }

  get role(): string {
    return this._role;
  }
  set role(value: string) {
    this._role = value;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`);
  }
}

const user1 = new User('Paul McCartney', 'paul', '1234');
const user2 = new User('George Harrison', 'george', '5678');
const user3 = new User('Richard Starkey', 'ringo', '8523');
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

user1.showInfo();
admin.showInfo();

console.log(`Всего обычных пользователей: ${User.count}`);
console.log(`Всего супер-пользователей: ${SuperUser.count}`);

user3.name = 'Ringo Starr';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

try {
  user2.login = 'geo';
} catch (e) {
  console.log((e as Error).message);
}
