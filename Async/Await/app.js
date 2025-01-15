
async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const messageDiv = document.getElementById("message");

    try {
        messageDiv.textContent = "Loading..."; 
        const response = await fetch(url);    
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const posts = await response.json(); 
        messageDiv.textContent = ""; 

        
        posts.forEach(post => {
            const postTitle = document.createElement("p");
            postTitle.textContent = post.title;
            messageDiv.appendChild(postTitle);
        });
    } catch (error) {
        messageDiv.textContent = `Error: ${error.message}`; 
    }
}


const button = document.getElementById("executeButton");
button.addEventListener("click", fetchData);
