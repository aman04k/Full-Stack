document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.fullscreen-logo').style.display = 'none';
        document.querySelector('.content').classList.add('visible');
    }, 3000); // 3 seconds delay for the logo animation
});

async function gitapi() {
    let username = document.getElementById("username").value;
    if (!username) {
        alert("Please enter a GitHub username");
        return;
    }

    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();
        
        if (data.message === "Not Found") {
            alert("User not found");
            return;
        }

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").innerHTML = data.name || "No name available";
        document.getElementById("followers").innerHTML = data.followers;
        document.getElementById("following").innerHTML = data.following;
        
        const userInfoCard = document.getElementById("user-info");
        userInfoCard.classList.add("visible");
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching the data");
    }
}