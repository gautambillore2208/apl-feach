
function simulateDelay(callback) {
    setTimeout(function() {
        callback(); 
    }, 5000);
}
function updateMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Callback executed after 5 seconds";
}

const button = document.getElementById("executeButton");
button.addEventListener("click", function() {
    simulateDelay(updateMessage); 
});


function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json()) 
        .then(posts => {
            const messageDiv = document.getElementById("message");
            messageDiv.innerHTML = ""; 
            posts.forEach(post => { 
                const postTitle = document.createElement("p");
                postTitle.textContent = post.title;
                messageDiv.appendChild(postTitle);
            });
        })
        .catch(error => {
            console.log("Error fetching data: ", error);
        });
}





function simulateDelay(callback) {
    setTimeout(function() {
        callback(); 
    }, 5000);
}

function updateMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Fetching data from API...";


    fetchData();
}






const button0 = document.getElementById("executeButton");
button0.addEventListener("click", function() {
    simulateDelay(updateMessage); 
})













