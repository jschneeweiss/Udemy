let selectedRating = 0;

function setRating(id) {  
    toggleButtonColor(id);        
}

function toggleButtonColor(id) {
    let ratingButton = document.getElementById(id);

    document.getElementById(id).classList.add("circle-clicked");
    document.getElementById(id).classList.remove("circle-hover");

    // check if rating is selected and remove the old selected
    if (selectedRating) {
        document.getElementById(selectedRating).classList.remove("circle-clicked");
        document.getElementById(selectedRating).classList.add("circle-hover");
    }
    // check if the same rating is clicked and remove circle-clicked class
    if (selectedRating === id) {
        document.getElementById(selectedRating).classList.remove("circle-clicked");
        document.getElementById(selectedRating).classList.add("circle-hover");
        selectedRating = 0;
    } else {
        selectedRating = id;
    }
}

function toggleStar() {
    let starElement = document.getElementById("star");

    console.log(starElement);
    // starElement.setAttribute("fill", "blue");
}

function submit() {
    if (selectedRating) {
        document.getElementById("main").style.display = "none";
        document.getElementById("voted").style.display = "inline";

        let selectedRatintText = document.getElementById("selectedRating");
        selectedRatintText.innerHTML = selectedRating;
    } else {
        alert("You do not choose a rating number!");
    }
}