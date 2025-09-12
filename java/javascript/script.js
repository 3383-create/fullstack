//json
 console.log("=== Hour 1;JSON Basics ===");

 let student = {
    name:"Mani",
    age:20,
    marks:[90,65,93]
 };

 //convert object to json string
 let jsonString =JSON.stringify(student);
 console.log("JSON String:",jsonString);

 //convert json string to object
 let parsedObj=JSON.parse(jsonString);
 console.log("parsed object:",parsedObj);

 
 fetch("https://jsnoplaceholder.typicode.com/posts/1")
 .then(Response=> Response.json())
 .then(data =>console.log("fetched data:",data))
 .catch(error => console.error("Error:",error))

 
 fetch("https://jsnoplaceholder.typicode.com/posts/")
 .then(Response=> Response.json())
 .then(data =>console.log("fetched data:",data))
 .catch(error => console.error("Error:",error))