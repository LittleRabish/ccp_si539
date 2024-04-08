document.getElementById("dark").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(
        "h2, h3, .grid-travel, .grid-pets, .flex-recipes, .active, #nav .active a, a:link, a:visited"
    ).forEach(function(heading) {
        heading.classList.toggle("dark-mode");
    });
    document.getElementById("dark").classList.toggle("dark-mode");
    
    if (document.body.className === "dark-mode") {
        document.getElementById("dark").innerHTML = "Light Mode";
    }
    else {
        document.getElementById("dark").innerHTML = "Dark Mode";
    }
})