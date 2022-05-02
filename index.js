console.clear()
var readline = require('readline-sync')

const newItem = "NEW ITEM added to inventory* "
let adventurerName = ""
let heroLocation = "The Village of Gozdvas"
let inventory = ["Light Rune"]
let said = false
let defeated = false
let encounters = 0
let foeName = ''
let foeDescription = ''
let foeAtk = ''
let foeHP = ''
let foeHit = ''
let foeCrt = ''
let foeItem = ''
let foeItemDescription = ''
let engage = ''
let venomAcquired = false
let attackCounter = ""


let hero = { 
    'hp': 100, 
    'atk':10, 
    'crt':6, 
    'def':1,
    'hit':4,
    'inventory': inventory
}

const forestFoe = [
    {
        'name':'Orc',
        'description':`A wild, oafish beast. They're quite strong, but rarely land a strike and smell to high heavens!`,
        'atk': 20,
        'hp' : 50,
        'hit': 8,
        'crt': 600,
        'item': 'Orc leather',
        'itemDescription':"IDK, maybe make your mother a nice purse or something?"
    },
    {
        'name':'Wicked Woods',
        'description': "These woods have been known to catch hold of adventerures and squeeze the life out of them. If you can manage to make it out before they're vines get a good grip you might just make it.",
        'atk': 5,
        'hp' : 40, 
        'hit':500,
        'crt':6,
        'item': "Staff of Walking",
        'itemDescription':"You don't really have a free hand to make this useful."
    },
    {
        'name':'Giant Widow',
        'description':`If your afraid of spiders then this is not your lucky day. This arachnid stands over 10ft tall and has an insatiable hunger. If you're able to avoid its webs and fangs, it may leave something useful behind.`,
        'atk': 5,
        'hp' : 40,
        'hit':4,
        'crt':10,
        'item':"Spider Venom",
        'itemDescription':" You smear the venom on your weapon hoping it will make the task of defeating your foes a bit easier."
    }
]

const caveFoe = [
    {
        'name':'Cave Goblin',
        'description':``,
        'atk': 15,
        'hp' : 40,
        'hit':20,
        'crt':8,
        'item': "Goblin Teeth",
        'itemDescription':"Um... these are kind of gross. You should probably ditch these as soon as possible.",
    },{
        'name':'Bats',
        'description':``,
        'atk': 5,
        'hp' : 40,
        'hit':4,
        'crt':200,
        'item': "A dead Bat",
        'itemDescription':"I wouldn't eat that, wouldn't want to start a new pandemic.",
    },{
        'name':'pickle',
        'description':``,
        'atk': 4,
        'hp' : 20,
        'hit':3,
        'crt':20,
        'item': "Pickled Cucumber",
        'itemDescription':"You should def eat this, you seem hungry.",
    }
]
const wurmDragon = {
    'name':'The Great Wurm Dragon',
    'description':``,
    'atk': 20,
    'hp' : 200,
    'hit':3,
    'crt':10,
    
}

const welcome = readline.question("Hello adventurer, and welcome to Gozdvas. What may I call you? ")
console.clear()
function whatsName(){
    if(welcome === ""){
        adventurerName = "Petunia"
    }else{
        adventurerName = welcome
    }
}

if (welcome === null){
    unwilling()
}else{
    whatsName()
    callToArms()
}

function callToArms(){
    console.clear()
    const callToArms = readline.keyInYN(adventurerName + `, are you here to answer Gozdvas' call for a hero?`)
    if (callToArms === true){
        quest()
    }else if (callToArms === false){
        unwilling()
}}

function unwilling(){
    console.clear()
    readline.keyInPause(`I hope a fearless adventurer will come to our rescue soon...`)
    process.exit()
}

function quest(){
    console.clear()
   const theTale = readline.keyInYN(`To truly understand this quest I must tell you our story from the begining...
    
   Our humble village has been nestled here in the outskirts of the fabled Zolgozd, a wicked forest known by many and feared by all. 
    
    You may ask, "why ever would your kind have settled in such a land?" The answer is actually quite simple, you see, the dark elves of Gozdvas are known for crafting divine equipment, and our secret lies at the heart of Zolgozd. There, deep within the forest is a cave, the only cave in Bajok, whose walls contain zmajskibane. This precious metal paired with dark elven magic allows us to forge the most sought after equipment in all of Bajok. 
    
    Recently, our miners were opening a new tunnel and found themselves in a colossal cavern. That day, Gozdvas was engulfed in a dark fog. We're not sure how the miners made it back from the caves, just that they were all laying unconcious at the entrance to Zolgozd. A few have made attempts to seek out the cause of the fog in an effort to resume our mining, but none have succeeded. All who have entered the forest have yet to return. 
    
    Our lively hood relies on the zmajskibane in those caves, and without it, our village cannot continue here. Please ` + adventurerName + `, will you help us?`)
    if(theTale === true){
        toTheCaves()
    }else if(theTale === false){
        unwilling()
    }
}

function toTheCaves(){
    console.clear()
    var weapon = readline.keyIn(`You venture to the east side of the village, where the entrance to Zolgozd lies. The fog is so dense and dark here at the forest's entrance that you can barely make out the trees. You reach a hand into the fog before you. The fog ripples and glows as your hand passes through, as if there is a magical barrier dividing the village from Zolgozd. "Wait!!" A young elf calls behind you. "Please, before you go, my village would like to lend you one of these fine pieces of equipment." Which will you take? (S)Sword (D)Dagger (M)Mace (H)Shield (N)None of Them, nothing compares to my own gear! `,{limit:'$<s,d,m,h,n,f>'})
    herosWeapon = weapon.toUpperCase()
    switch(herosWeapon){
        case "S":
           demonSlayer()
        break;
        case "D":
           dragonPiercer()
        break;
        case "M":
            goblinGobbler()
        break;
        case "H":
           durex()
        break;
        case "N":
            readline.keyInPause(adventurerName + `: "I'm good kid, nothing compares to the gear I'm Packing!" \n Young Dark Elf: "Whatever you say, It's your funeral...."`)
        break;
        case "F":
            demonSlayer()
            dragonPiercer()
            goblinGobbler()
            durex()
    }
    printHero()
    enterForest()
}

function demonSlayer(){
    console.clear()
    hero.atk = hero.atk + 10
    hero.def = hero.def + 1
    hero.hit = hero.hit -1
    readline.keyInPause(newItem + `'Demon Slayer: A sturdy blade enveloped in a green flame. Demon Slayer is stronger than a common adventurers blade yet lighter, thus increasing damage and ones ability to parry`)
    inventory.push("Demons Edge")
}
function dragonPiercer(){
    console.clear()
    hero.atk = hero.atk + 5
    hero.crt = hero.crt - 2
    hero.hit = hero.hit -3
    hero["hit Chance"] = hero["hit Chance"] - 1
    readline.keyInPause(newItem + `'Dragon Piercer: A small swift dagger capable of piercing a dragons natural armor.The spine of the blade is adorned with an elven inscription that glows a deep midnight purple.`)
    inventory.push("Dragon Piercer")
}
function goblinGobbler(){
    console.clear()
    hero.atk = hero.atk + 20
    hero.hit = hero.hit + 4
    readline.keyInPause(newItem + `'Goblin Gobbler: A heafty two handed mace. The orb at its tip radiates a golden hue. Deals a large amount of damage if you're able to land a strike.`)
    inventory.push("Goblin Gobbler")
}
function durex(){
    console.clear()
    hero.def = hero.def + 3
    readline.keyInPause(newItem + `'Durex: Not quite a magnum sized shield, it fits in one hand leaving the other free to use as desired. Studded with various elven gems, this shield is sure to help you defend against the Zolgozd'z strongest STDs (sinisterly terrifying denizens) `)
    inventory.push("Durex")
}

function printHero(){
    console.clear()
    readline.keyInPause("Name: " + adventurerName + `\nLocation: ` + heroLocation + "\nHP: " + hero.hp + "\nAttack: " + hero.atk + "\nDefense: " + hero.def + "\nCritical Attack: " + hero.crt + "\nInventory: " + hero.inventory + '\nEncounters: ' + encounters)
}

function enterForest(){
    console.clear()
    readline.keyInPause(`You walk through the vail between the village and Zolgozd and are instantly overcome by an intense dark chill. Visibility is extremely low and you pull the Light Rune from your pack.  It doesn't help much but it allows you to see the path laid before you. you cant help but feel that this forest is not ok with your presence.`)
}

while (hero.hp > 0 && defeated !== true){
    console.clear()
    walk()
}

function walk(){
    console.clear()
    let chance = Math.floor((Math.random()*3)+1)
    switch(chance){
        case 1:
            encounter()
        break;
        default:
            uneventful()
        break;  
    }
    if(encounters < 3){
        heroLocation = "Zolgozd"
    }else{
        heroLocation = "The Heart of Zolgozd"
    }
    if (encounters === 3 && said !== true){
        theCaves()
    }
}

function uneventful(){
    console.clear()
    if(heroLocation === "Zolgozd"){
        readline.keyInPause("The forest is quiet, too quiet. You cant help but feel like you're being watched.")
        choice()
        
    }else if(heroLocation === "The Heart of Zolgozd"){
        readline.keyInPause("The damp musky smell of the cave is overwhelming. At least there hasn't been any unwelcomed suprises in a while.")
        choice()
    }
}

function encounter(){
    console.clear()
    encounters ++
    if(encounters > 6){
        dragon()
    }else{
        if(heroLocation === "Zolgozd"){
            let number = Math.floor((Math.random()*3)+1)-1
            let forestBeast = forestFoe[number]
            fight(forestBeast)
        }else if(heroLocation === "The Heart of Zolgozd"){
            let number = Math.floor((Math.random()*3)+1)-1
            let caveBeast = caveFoe[number]
            fight(caveBeast)
        choice()
    }
}}

function theCaves(){
    console.clear()
    heroLocation = "The Heart of Zolgozd"
    said = true
    readline.keyInPause(`The journey through Zolgozd was arduous to say the least, but now you approach the entrance to the caves. You fear the worst is yet come. Theres a stench eminating from the cave that you can't quite put your finger on; peppery and vile. You've made it this far, no turning back now!`)
}

function choice(){
    console.clear()
    let journey = readline.keyIn(`Would you like to: (w)Continue Walking or (p) print your current stats? `,{limit:'$<w,p>'})
    if (journey === "w"){
        readline.keyInPause("You continue on your quest")
    }else if (journey === "p"){
        printHero()
    }
}

function fight(creature){
    console.clear()
    foeName = creature.name
    foeDescription = creature.description
    foeAtk = creature.atk
    foeHP = creature.hp
    foeHit = creature.hit
    foeCrt = creature.crt
    foeItem = creature.item
    foeItemDescription = creature.itemDescription
    engage = readline.keyIn(`You've encountered ` + foeName + `. ` + foeDescription + ` (a) Attack or (r) Run? `,{limit:'$<a,r>'})
    engage = engage.toLowerCase()
    if (engage === 'a'){
        console.clear()
        attack()
    }else if (engage === 'r'){
        runAway()
    }
}

function attack(){
    while(engage === 'a'){
                let heroAtk = hero.atk
                let heroDef = hero.def
                let heroHit = hero.hit
                let heroCrt = hero.crt
                let herosAttack = ''
                let foesAttack = ""
                foeHit = foeHit - heroDef
                let heroStrike = Math.floor((Math.random()*heroHit)+1)
                let heroCrit = Math.floor((Math.random()*heroCrt)+1)
                let foeStrike = Math.floor((Math.random()*foeHit)+1)
                let foeCrit = Math.floor((Math.random()*foeCrt)+1)
                if (heroStrike === 1){
                    if (heroCrit === 1){
                        herosAttack = 'land a critical attack and deal ' + (heroAtk *3) + ` points of damage. The `
                        foeHP = foeHP - (heroAtk * 3)
                        if(foeHP < 0){
                            foeHP = 0
                        }
                    }else{
                        herosAttack = 'attack the ' + foeName + ` and deal ` + heroAtk + ` points of damage. The `
                        foeHP = foeHP - heroAtk
                        if(foeHP < 0){
                            foeHP = 0
                        }
                }
                }else{
                    herosAttack = `miss the ` + foeName + ` and deal no damage. The `
                }
                if (foeStrike === 1){
                    if (foeCrit === 1){
                        foeAtk = foeAtk * 3
                        hero.hp = hero.hp - foeAtk
                        foesAttack = 'lands a critical attack dealing ' + foeAtk + ' points of damage to you.'
                    }else{
                        hero.hp = hero.hp - foeAtk
                        foesAttack = ' attacks dealing ' + foeAtk + ' points of damage to you.'
                    }
                }else{
                    foesAttack = `'s attack misses. `
                }
                if(hero.hp > 0){
                    if(foeHP > 0){
                        if (attackCounter > 4){
                            console.clear()
                            attackCounter = 0
                        }
                        engage = readline.keyIn(`You ` + herosAttack + foeName + foesAttack + `Your current HP is ` + hero.hp + ` and the ` + foeName + `'s current HP is ` + foeHP + `. (a) Attack again or (r)Run? `,{limit:'$<a,r>'})
                        attackCounter ++
                       
                    }else if(foeHP <= 0 && foeName !== 'The Great Wurm Dragon' ){
                        readline.keyInPause(`You ` + herosAttack + foeName + foesAttack + `Your current HP is ` + hero.hp + ` and the ` + foeName + `'s current HP is ` + foeHP + `. You have defeated the ` + foeName)
                        itemDrop()
                        readline.keyInPause("You continue on your quest")
                        engage = ''
                    }else{
                        defeated = true
                        readline.keyInPause(newItem + 'The Dragons Head: Proof of your victory and a sign that you are a true hero ' + adventurerName + `!`)
                        inventory.push('The Dragons Head')
                        victory()
                    }
            }else{ 
            fallenHero()
        }
    }
}

function runAway(){
    let chance = Math.floor((Math.random()*7)+1)
    while(engage === 'r'){
        if (chance === 1){
            hero.hp = hero.hp - foeAtk
            engage = 'a'
            engage = readline.keyIn(`You attempt to run but ` + foeName +  ` attacks dealing ` + foeAtk + ' points of damage to you.'+ `Your current HP is ` + hero.hp + ` and the ` + foeName + `'s current HP is ` + foeHP + `. (a) Attack or (r)Run? `,{limit:'$<a,r>'})
            if (engage === 'a'){
                attack()
            }
        }else{
            readline.keyInPause('You manage to escape safely')
            engage = ''
        }
    }
}

function itemDrop(){
    console.clear()
    if (foeName === "Giant Widow" && venomAcquired === false){
        spiderVenom()
        venomAcquired = true
        inventory.push(foeItem)
        readline.keyInPause(newItem + foeItem + ": " + foeItemDescription)
    }else if(foeName === 'pickle'){
        picklePower()
        inventory.push(foeItem)
        readline.keyInPause(newItem + foeItem + ": " + foeItemDescription)
    }else{
        inventory.push(foeItem)
        readline.keyInPause(newItem + foeItem + ": " + foeItemDescription)
    }
}

function spiderVenom(){
    hero.atk = hero.atk + 5
}
function picklePower(){
    hero.hp = hero.hp + 50
}

function dragon(){
    console.clear()
    let luck = Math.floor((Math.random()*100)+1)
    if(luck === 1){
        readline.keyInPause(`  The Dragon was sleeping, so you cut of its head with no resistance. The fog disipates and you carry the head back to the village. They are so happy they make you their king!!
        However, there is already a king in this land. He is enraged by this sudden turn of events, and sends his minions to behead you.
            Thus ends the tale of ` + adventurerName)
        process.exit()
    }else{
    fight(wurmDragon)
    }
}

function fallenHero(){
    console.clear()
    engage = ''
    readline.keyInPause(`You fought valiantly brave warrior, but the tale of ` + adventurerName + ` has come to an unfortunate end.`)
        process.exit()
}

function victory(){
    console.clear()
    var youWon = readline.keyInPause(`You defeat the fierce dragon and take its head for proof. When you return to the village, they are extremely grateful and throw a large feast in your honor. You rest there a night, and early the next morning you're off to seek out your next quest, leaving the epic tale of the legendary ` + adventurerName + `, to be continued.....`)
    console.clear()
    process.exit()
}

