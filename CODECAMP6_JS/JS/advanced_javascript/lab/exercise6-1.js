let user = {
    name: "John",
    go: function() {
        alert(this.name);
    };
}

user.go(); // ถ้าใส่ ; ข้างบนก็จะแสดง John

