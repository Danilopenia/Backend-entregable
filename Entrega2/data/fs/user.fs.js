import fs from "fs"

class UsersFs{
    static #users


    constructor(path){
        this.path = path;
        this.users = [];
        this.init();
    }
    init() {
        const file = fs.existsSync(this.path);
        if (file) {
          this.users = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        } else {
          fs.writeFileSync(this.path, JSON.stringify([], null, 2));
        }
      }
      async createUser({ name, lastname, ...data }) {
        try {
          if (!name || !lastname) {
            throw new Error("Please, insert name & lastname");
            //VA A ACTIVAR EL CATCH (MANEJADOR DE ERRORES)
          }  


      const user = {
        id:
          this.users.length === 0
            ? 1
            : this.users[this.users.length - 1].id + 1,
        name,
        lastname,
        gmail,
        date: data.date || new Date(),
      };
      this.users.push(user);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.users, null, 2)
      );
      return true;
    } catch (error) {
      return error.message;
    }
}
getUser() {
    try {
    
     if (this.users.length===0) {
       throw new Error("they arent products");
     }else{
       return this.users;
     }
     
    } catch (error) {
     return error.message
    }
   }

 getUserById(id) {
try {
  const one = this.users.find((each) => each.id === Number(id));
   if (!one) { 
    throw new Error ("ERROR the user with id "+id+" doesnt exist");
   }else{
    return one;
   }
  
  } catch (error) {
  return error.message;
}
}}

const ruta = "./Entrega2/data/fs/files/user.json";
const contenido = JSON.stringify([{name:"aa"},{lastname:"bbb"},{gmail:"ffff"}],null,2);
fs.writeFileSync(ruta, contenido)