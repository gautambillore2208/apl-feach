
function fetchDataWithTimeout(url, timeoutDuration) {
    return new Promise((resolve, reject) => {
    
        const timeout = setTimeout(() => {
            reject("Operation timed out. The request took too long.");
        }, timeoutDuration);

        // Fetch data from the API
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject("Failed to fetch data.");
                }
                return response.json();
            })
            .then(data => {
                clearTimeout(timeout); 
                resolve(data); 
            })
            .catch(error => {
                clearTimeout(timeout); 
                reject("Error fetching data: " + error);
            });
    });
}

function handleButtonClick() {
    const messageDiv = document.getElementById("message");
    const postsDiv = document.getElementById("posts");

    
    postsDiv.innerHTML = "";
    messageDiv.textContent = "Loading..."; 

    const apiUrl = "https://dummyjson.com/posts"; 

    
    fetchDataWithTimeout(apiUrl, 5000)
        .then(posts => {
            messageDiv.textContent = ""; 
            postsDiv.innerHTML = ""; 

            posts.slice(0, 5).forEach(post => {
                const postTitle = document.createElement("p");
                postTitle.textContent = post.title;
                postsDiv.appendChild(postTitle);
            });
        })
        .catch(error => {
            messageDiv.innerHTML = `<span class="error">${error}</span>`; 
        });
}

const button = document.getElementById("fetchButton");
button.addEventListener("click", handleButtonClick);
