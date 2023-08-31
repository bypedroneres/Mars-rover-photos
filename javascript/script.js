document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "1IhlTtP5IddhiFlO42V1HJpwSUCho6bigdCkvYrU";
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const photos = data.photos;
            const photoGrid = document.getElementById("photo-grid");

            photos.forEach(photo => {
                const img = document.createElement("img");
                img.src = photo.img_src;
                img.alt = "Mars Rover Photo";

                const photoContainer = document.createElement("div");
                photoContainer.classList.add("photo-container");
                photoContainer.appendChild(img);

                photoGrid.appendChild(photoContainer);
            });
        })
        .catch(error => {
            console.error("Error fetching photos from NASA API:", error);
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "1IhlTtP5IddhiFlO42V1HJpwSUCho6bigdCkvYrU";
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const photos = data.photos;
            const photoGrid = document.getElementById("photo-grid");

            photos.forEach(photo => {
                const img = document.createElement("img");
                img.src = photo.img_src;
                img.alt = "Mars Rover Photo";

                const photoContainer = document.createElement("div");
                photoContainer.classList.add("photo-container");

                const details = document.createElement("div");
                details.classList.add("photo-details");
                details.innerHTML = `
                    <p><strong>Date:</strong> ${photo.earth_date}</p>
                    <p><strong>Sol:</strong> ${photo.sol}</p>
                    <p><strong>Camera:</strong> ${photo.camera.full_name}</p>
                `;

                photoContainer.appendChild(img);
                photoContainer.appendChild(details);

                photoGrid.appendChild(photoContainer);
            });
        })
        .catch(error => {
            console.error("Error fetching photos from NASA API:", error);
        });
});

photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.img_src;
    img.alt = "Mars Rover Photo";

    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");

    const details = document.createElement("div");
    details.classList.add("photo-details");

    if (photo.earth_date) {
        details.innerHTML += `<p><strong>Date:</strong> ${photo.earth_date}</p>`;
    }
    
    if (photo.sol) {
        details.innerHTML += `<p><strong>Sol:</strong> ${photo.sol}</p>`;
    }
    
    if (photo.camera && photo.camera.full_name) {
        details.innerHTML += `<p><strong>Camera:</strong> ${photo.camera.full_name}</p>`;
    }

    photoContainer.appendChild(img);
    photoContainer.appendChild(details);

    photoGrid.appendChild(photoContainer);
});