function Nextpage(){
    username = document.getElementById("user_input").value;
    password = document.getElementById("password_input").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password)

    window.location = "Kwitter_room.html";
}