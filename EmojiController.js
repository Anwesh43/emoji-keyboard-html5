class EmojiController {
    constructor(emojiDiv,keyboardContainer) {
        this.emojiDiv = emojiDiv
        this.keyboardContainer = keyboardContainer
        this.down = false
    }
    handleClick() {

        this.emojiDiv.onclick = () => {
            this.down = !this.down
            if(this.down) {
                this.keyboardContainer.style.visibility = 'visible'
            }
            else {
                this.keyboardContainer.style.visibility = 'hidden'
            }
        }
    }
}
