// Add your code here
let name = "Sam"
let email = "sam@sam.com"
let div = document.createElement("div")
function submitData( name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email
        }),
    })
    .then(res => res.json())
    .then(data => document.body.innerHTML = data.id)
    .catch((error) => {
        let message = 'Unauthorized Access'
        document.body.innerHTML = message
        console.error('Error:', error);
      });
}
submitData( name, email )

