let sideNav = document.querySelector(".side-navBar")

function showNavBar() {
    sideNav.style.left = "0"
}
function closeNavBar() {
    sideNav.style.left = "-60%"

}

// Search bar function

let container = document.querySelector(".collection-containers")
let productList = container.querySelectorAll("div")
let search = document.getElementById("collections-searchbar")

search.addEventListener("keyup", function () {
    let enteredText = event.target.value.toUpperCase()

    for (i = 0; i < productList.length; i++) {
        let productName = productList[i].querySelector("p").textContent
        if (productName.toUpperCase().indexOf(enteredText) < 0) {
            productList[i].style.display = "none"
        }
        else {
            productList[i].style.display = "block"

        }
    }
})