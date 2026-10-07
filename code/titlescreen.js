console.log("start")

const startButton = document.getElementById("start")
const continueButton = document.getElementById("continue")
startButton.addEventListener('click',starting)
continueButton.addEventListener('click',continuing)


function starting(){
    window.location.href = "screen.html"
    //freeze the savefile
}
function continuing(){
    if (localStorage.getItem("saveFile")) {
        console.log("you got a savefile")
    }
}




function gotoArea(area){

}

