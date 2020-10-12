/**================================================================================================
 *                                         SELECTORS
 *================================================================================================**/

const burger = document.querySelector(".burger-menu")
const navList = document.querySelector(".navbar_icons")

/**================================================================================================
 *                                         VARIABLES
 *================================================================================================**/
var burgerOpen = false
/**================================================================================================
 *                                         LISTENERS
 *================================================================================================**/
burger.addEventListener("click", () => {
    if (burgerOpen == false) {
        burger.classList.add("open")
        burger.classList.remove("closed")
        navList.classList.add("open")
        navList.classList.remove("closed")
        burgerOpen = true
    }else{
        burger.classList.add("closed")
        burger.classList.remove("open")
        navList.classList.add("closed")
        navList.classList.remove("open")
        burgerOpen = false
    }
    
})
