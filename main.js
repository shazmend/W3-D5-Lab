
// CKEDITOR
CKEDITOR.replace('textarea');

let contentCopy = document.getElementById("editor-content-copy")
let postButton = document.getElementById("postButton")

postButton.addEventListener('click', () => {
    //contentCopy.innerHTML = CKEDITOR.instances.editor1.document.getBody().getText(); // For plain text
    contentCopy.innerHTML = CKEDITOR.instances.textarea.getData(); // For formatted text

    let btn = document.createElement("button")
    btn.innerText = "delete"
    contentCopy.appendChild(btn)


    function btnRemove() {
        contentCopy.remove()
    }
    btn.addEventListener("click", btnRemove)

});


function logOut() {
    localStorage.clear();     
}

// LogIn
function LogIn() {
    let logInBtn = document.getElementById("logIn")
    let name = document.getElementById("name").value
    let pass = document.getElementById("pass").value
    let showName = document.getElementById("user-name")
  

    //validate name
    if(name.length < 3)
    {
        return false
    }
    else if (name == "")
    {
        return false
    }
    //validate password

    else if(pass.length < 8 ){
        return false
    }
    else if(pass == "") {
        return false
    }
    else{  
        showName.innerText = "hello " + name
        localStorage.setItem("name", name)
        localStorage.setItem("pass", pass)
        location.href = "./bloog.html" 

    }

       
      

}

    




// Bloog

let userName = document.getElementById("user-name")
userName.innerText = localStorage.getItem("name")