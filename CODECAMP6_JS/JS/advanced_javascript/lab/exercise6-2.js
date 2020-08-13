function makeUser() {
    return {
      name: "John",
      ref: this // this ที่มีตอนนี้คือ window
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name );  