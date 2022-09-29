import characterData from '/data.js'
import Character from '/Character.js'

let monstersArray = ["vampire", "demon", "goblin"];

function getNewMonster(){
    nextMonsterData = characterData[monstersArray.shift()]
 }
 

function attack(){
    spiderMan.getDiceHtml()
    vampire.getDiceHtml()
    spiderMan.takeDamage(vampire.currentDiceScore)
    vampire.takeDamage(spiderMan.currentDiceScore)

    render()

    if(spiderMan.dead || vampire.dead){
        endGame()
    }      
}

function endGame() {
const endMessage = spiderMan.health === 0 && vampire.health === 0 ?
    "No victors - all creatures are dead" :
    spiderMan.health > 0 ? "The SpiderMan Wins" :
        "The Vampire is Victorious"

const endEmoji = spiderMan.health > 0 ? "🔮" : "☠️"
document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2> 
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>
    `
}
document.getElementById("attack-button").addEventListener('click', attack)


function render() {
    document.getElementById('hero').innerHtml = spiderMan.getCharacterHtml();
    document.getElementById('monster').innerHtml = vampire.getCharacterHtml();

}

const spiderMan = new Character(characterData.hero)
const vampire = new Character(characterData.monster)

render()
