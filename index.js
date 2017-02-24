var container = document.getElementById('container')
container.style.width = window.innerWidth/2
container.style.height = window.innerHeight
container.style.border = "2px dotted black"
var emojiDiv = document.createElement('div')
emojiDiv.style.width = Math.min(window.innerWidth,window.innerHeight)/10
emojiDiv.style.height = Math.min(window.innerWidth,window.innerHeight)/10
emojiDiv.style.background = "url(smile.png)"
emojiDiv.style.position = "absolute"
emojiDiv.style.left = 5
emojiDiv.style.top = window.innerHeight/20
emojiDiv.style.border = "1px dotted gray"
container.appendChild(emojiDiv)

var keycontainer = document.createElement('div')
keycontainer.style.width = (window.innerWidth*9)/20
keycontainer.style.height = (window.innerHeight*9)/10
keycontainer.style.position = "absolute"
keycontainer.style.left = window.innerWidth/20
keycontainer.style.top = window.innerHeight/10
keycontainer.style.visibility = 'hidden'
keycontainer.style.border = "1px dotted gray"
container.appendChild(keycontainer)
var textContainer = document.getElementById('textContainer')
var emojiController = new EmojiController(emojiDiv,keycontainer)
emojiController.handleClick()

let createEmojis = () => {
    for(var i = 9728;i<=9982;i++) {
        var emojiKey = document.createElement('div')
        emojiKey.innerHTML = "&#"+i+";"
        emojiKey.style.float = "left"
        emojiKey.style.border = "1px solid black"
        emojiKey.style.color = "#FDD835"
        emojiKey.style.width = (parseFloat(keycontainer.style.width)-4)/16
        emojiKey.style.height = (parseFloat(keycontainer.style.height)-68)/16
        emojiKey.style.textAlign = "center"
        emojiKey.onclick = () => {
            textContainer.style.color = event.target.style.color
            textContainer.innerHTML = textContainer.innerHTML+" "+event.target.innerHTML
        }
        keycontainer.appendChild(emojiKey)
    }
}
createEmojis()
