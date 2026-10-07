export class DialogBox {
    constructor(body) {
        this.body = body
        this.box
        this.name 
        this.text 
    }
    //adding removing
    show(){
        this.box = document.createElement('div')
        this.name = document.createElement('h2')
        this.text = document.createElement('p')
        this.box.id = "dialog-box"
        this.box.appendChild(this.name)
        this.box.appendChild(this.text)
        this.body.appendChild(this.box)
        this.loadText()
    }
    remove(){
        this.box.remove()
    }

    //changing the text inside
    loadText(){
        this.name.innerText = "name here"
        this.text.innerText = "text here"
    }
}
//<div id="dialog-box">
//    <h2>character name</h2>
//    <p>dialog</p>
//</div>



// <div id="dialog-character-img">
//         <img id="" src="" alt="character image">
//     </div>