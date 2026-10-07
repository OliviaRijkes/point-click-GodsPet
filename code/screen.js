import items from "../data/items.json" with {type: 'json'}
import characters from "../data/characters.json" with {type:'json'}
import {DialogBox} from "./ui/dialog.js"

let body = document.getElementsByTagName('body')[0]
import location from "../data/locations/outside/begin.json" with {type:'json'}

console.log(location)
console.log(items)
console.log(characters)
let dialogbox =new DialogBox(body)
dialogbox.show()

function changeLocation(url){
}



