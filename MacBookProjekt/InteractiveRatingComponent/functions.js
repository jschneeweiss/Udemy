let selectedRating;

function setRating(id) {
    setDefaultRatingColor(id);
    console.log('id', id);
    toggleButtonColor(id);        
}

function toggleButtonColor(id) {
    let ratingButton = document.getElementById(id);
    console.log(ratingButton.style);
    if (ratingButton.style.color === "rgb(255, 255, 255)") {
        console.log(true);
        document.getElementById(id).style.backgroundColor = "#414545";
        document.getElementById(id).style.color = "#959eac";
        selectedRating = 0;
    } else {
        console.log(false);
        document.getElementById(id).style.backgroundColor = "#fb7413";
        document.getElementById(id).style.color = "#ffffff";
        selectedRating = id;
    }
    console.log('selectedRating', selectedRating); 
}

function setDefaultRatingColor(id) {
    for (let ratingButton = 1; ratingButton <= 5; ratingButton++) {
        if (id !== ratingButton) {
            document.getElementById(ratingButton).style.backgroundColor = "#414545";
            document.getElementById(ratingButton).style.color = "#959eac";
        }        
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