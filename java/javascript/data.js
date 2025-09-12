fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users => {
    let output = "<h3>user List</h3><ul>";
    users.forEach(user=>{
        output+=`<li>${user.name} - ${user.email}</li>`;
    });
    output += "</ul>";
    document.body.innerHTML+=output
});