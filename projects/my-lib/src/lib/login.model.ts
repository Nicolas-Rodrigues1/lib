export class LoginModel{
    constructor(
        public login: string, 
        public password: string
    ){
        this.login = login;
        this.password = password;
    }
    
    getLogin(){
        return this.login
    }
  
    getPassword(){
        return this.password
    }
}