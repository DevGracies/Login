let names = prompt('Enter username')
let pin = prompt('Enter password')

class Access {
  constructor(username, password) {
    this.username = username
    this.password = password
  }
  loginMessage() {
    if (this.username == names && this.password == pin) {
      console.log(`${this.username} you are welcome, you are now loginIn`)
    } else {
      console.log('wrong usename or password')
    }
  }
}

let Login = new Access(names, pin)
let login2 = new Access('Grace', 2937784)
console.log(Login.loginMessage())
console.log(login2.loginMessage())
