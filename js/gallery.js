function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo > img");
    let imageHead = document.querySelector("#gallery-info > h3");
    let imagePara = document.querySelector("#gallery-info > p");
    let currentClass = "current";
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
             // Preload large images.
             let newImageSrc  = thumbnail.dataset.largeVersion;
             let largeVersion = new Image();
             largeVersion.src = newImageSrc;
            //Changes the selected image borders.
            document.querySelector(".current").classList.remove(currentClass);
            thumbnail.parentElement.classList.add(currentClass);

            //Changes the main image.
            let imgSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", imgSrc);
            mainImage.setAttribute("alt", thumbnail.alt);

            //Changes the image info in Column 3.
            let imgTitle = thumbnail.dataset.title;
            let imgDescription = thumbnail.dataset.description;
            imageHead.innerHTML = imgTitle;
            imagePara.innerHTML = imgDescription;
        })
    })
    
}