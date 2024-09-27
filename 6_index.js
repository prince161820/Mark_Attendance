document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "Prince" && password == "2101CE43") {
       
        window.location.href = "6_projects.html";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}

