class userManager {
    static #users = [];
  
    id;
    name;
    photo;
    email;
  
    create(data) {
      const propsList = ["name", "photo", "email"];
      const keyList = Object.keys(data);
  
      const missingProps = [];
  
      for (let i = 0; i < propsList.length; i++) {
        !propsList.includes(keyList[i]) ? missingProps.push(propsList[i]) : null;
      }
  
      if (missingProps.length) {
        console.log(`faltan las propiedades: ${missingProps.join(" ")}`);
      } else {
        const id = userManager.#users[userManager.#users.length - 1]?.id + 1 || 1;
  
        userManager.#users.push({ id, ...data });
      }
    }
  
    getUser() {
      return userManager.#users;
    }
  
    getUserById(id) {
      return userManager.#users.find((el) => el.id == id);
    }
  }
  
  const UserManager = new userManager();
  
  UserManager.create({
    name: "Danilo",
    photo: "https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1",
    email: "danilopenia@gmail.com",
  });
  
  UserManager.create({
    name: "luisito",
    photo: "https://buenosaires.gob.ar/sites/default/files/media/image/2021/01/29/db85f75ad56f6f9285b32759c9471c028070776e.jpg",
    email: "luis@gmail.com",
  });
  
  console.log(UserManager.getUser());
  console.log(UserManager.getUserById(2));
  
  UserManager.create({
    name: "mario",
  });
  