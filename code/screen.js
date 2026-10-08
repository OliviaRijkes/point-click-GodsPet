import items from "../data/items.json" with {type: 'json'}
import characters from "../data/characters.json" with {type:'json'}
import {DialogBox} from "./ui/dialog.js"
import {areas} from "./areaLoader.js"

console.log(areas)

let body = document.getElementsByTagName('body')[0]
console.log(items)
console.log(characters)
let dialogbox =new DialogBox(body)
dialogbox.show()




