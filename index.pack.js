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
let engage = ''

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
        'description':`A wild, oafish beast. They're quite strong but rarely land a strike and they smell to high heavens!`,
        'atk': 20,
        'hp' : 50,
        'hit': 8,
        'crt': 600,
        'item': 'Orc leather',
        'itemDescription':"IDK, maybe make your mother a nice purse or something?"
    },
    {
        'name':'Wicked Woods',
        'descriptions': "These woods have been known to catch hold of adventerures and squeeze the life out of them. If you can manage to make it out before they're vines get a good grip you might just make it",
        'atk': 5,
        'hp' : 40, 
        'hit':500,
        'crt':6,
        'item': "Staff of Walking",
        'itemDescription':"You'd dont really have a free hand to make this useful"
    },
    {
        'name':'Giant Widow',
        'description':`If your afraid of spiders then this is not your lucky day. This arachnid stands over 10ft tall and has an ensatiable hunger. If you're able to avoid its webs and fangs, it may leave something useful behind.`,
        'atk': 5,
        'hp' : 40,
        'hit':4,
        'crt':10,
        'item':"Spider Venom",
        'itemDescription':" You smear the venom on your weapon hoping it will make the task of defeating your foes a bit easier",
        'modfier': spiderVenom()
    }
]

const caveFoe = ['Cave Goblin','Bats','pickle']

const welcome = prompt("Hello adventurer and welcome to Gozdvas. What may I call you?")

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
    const callToArms = confirm(`Are you here to answer Gozdvas' call for a hero `+ adventurerName + `?`)
    if (callToArms === true){
        quest()
    }else if (callToArms === false){
        unwilling()
}}

function unwilling(){
    if(!alert(`I hope a fearless adventurer will come to our rescue soon...`)){
        window.location.reload()}}

function quest(){
   const theTale = confirm(`To truly understand this quest I must tell you our story from the begining...
    Our humble villages has been nesseled here in the outskirts of the fabled Zolgozd, a wicked forest know by many and fear by all. You may ask, why ever would your kind have settled in such a land? The answer is actually quite simple, you see, the dark elves of Gozdvas are known for crafting divine equipment, and our secret lies at the heart of Zolgozd. There, deep within the forest is a cave, the only cave in Bajok, whos wall contain zmajskibane. This precious metal paired with dark eleven magic allow us to forge the most sought after equipment in all of Bajok. 
    Recently our miners were opening a new tunnel and found themselves in a colossal cavern. That day Gozdvas was ingulfed in a dark fog. We're not sure how the miners made it back from the caves, just that they were all laying unconcious at entrance to Zolgozd. A few have made attempts to seek out the cause of the fog in an effort to resume our mining but none have succeed, and all who have entered the forest have yet to return. Our lively hood relies on the zmajskibane in those caves, and without it our village cannot continue here. Please ` + adventurerName + `, will you help us?`)
    if(theTale === true){
        toTheCaves()
    }else if(theTale === false){
        unwilling()
    }
}

function toTheCaves(){
    var weapon = prompt(`You venture to the east side of the village, where the entrance to Zolgozd lies. The fog is so dense and dark here at the forest's entrance that you can barley make out the trees. You reach a hand into the fog before you. The fog ripples and glows as your hand passes through, as if there is a magical barrier dividing the village from Zolgozd. "Wait!!" A young elf calls behind you. "Please, before you go, my village would like to lend you one of these fine pieces of equipment." Which will you take? (S)Sword (D)Dagger (M)Mace (SH)Shield (N)None of Them, nothing compares to my own gear!`)
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
        case "SH":
           durex()
        break;
        case "N":
            confirm(adventurerName + `: "I'm good kid, nothing compares to the gear I'm Packing!" \n Young Dark Elf: "Whatever you say, It's your funeral...."`)
        break;
        case "FIRE SALE":
            demonSlayer()
            dragonPiercer()
            goblinGobbler()
            durex()
    }
    print()
    enterForest()
}

function demonSlayer(){
    hero.atk = hero.atk + 10
    hero.def = hero.def + 1
    hero.hit = hero.hit -1
    confirm(newItem + `'Demon Slayer: A sturdy blade enveloped in a green flame. Demon Slayer is stronger than a common adventurers blade yet lighter, thus increasing damage and ones ability to parry`)
    inventory.push("Demons Edge")
}
function dragonPiercer(){
    hero.atk = hero.atk + 5
    hero.crt = hero.crt - 2
    hero.hit = hero.hit -3
    hero["hit Chance"] = hero["hit Chance"] - 1
    confirm(newItem + `'Dragon Piercer: A small swift dagger capable of piercing a dragons natural armor.The spine of the blade is adorned with an elven inscription that glows a deep midnight purple.`)
    inventory.push("Dragon Piercer")
}
function goblinGobbler(){
    hero.atk = hero.atk + 20
    hero.hit = hero.hit + 4
            confirm(newItem + `'Goblin Gobbler: A heafty two handed mace. The orb at its tip radiates a golden hue. Deals a large amount of damage if you're able to land a strike.`)
            inventory.push("Goblin Gobbler")
}
function durex(){
    hero.def = hero.def + 3
    confirm(newItem + `'Durex: Not quite a magnum sized shield, it fits in one hand leaving the other free to use as desired. Studded with various elven gems, this shield is sure to help you defend against the Zolgozd'z strongest STDs (sinisterly terrifying denizens) `)
    inventory.push("Durex")
}
function spiderVenom(){
    hero.atk = hero.atk + 5
}


function print(){
    confirm("Name: " + adventurerName + `\nLocation: ` + heroLocation + "\nHP: " + hero.hp + "\nAttack: " + hero.atk + "\nDefense: " + hero.def + "\nCritical Attack: " + hero.crt + "\nInventory: " + hero.inventory + '\nEncounters: ' + encounters)
}

function enterForest(){
    confirm(`You walk through the vail between the village and Zolgozd and are instantly overcome by an intense dark chill. Visibility is extremely low and you pull the Light Rune from your pack.  It doesn't help much but it allows you to see the path laid before you. you cant help but feel that this forest is not ok with your presence.`)
}

function walk(){
    if(encounters < 3){
        heroLocation = "Zolgozd"
    }else{
        heroLocation = "The Heart of Zolgozd"
    }
    if (encounters === 3 && said !== true){
        theCaves()
    }
    let chance = Math.floor((Math.random()*3)+1)
    switch(chance){
        case 1:
            encounter()
        break;
        default:
            uneventful()
        break;  
    }
}

function theCaves(){
    heroLocation = "The Heart of Zolgozd"
    said = true
    confirm(`The journey through Zolgozd was arduous to say the least, but now you approach the entrance to the caves. You fear the worst is yet come. Theres a stench eminating from the cave that you cant quite put your finger on; peppery and vile. You've made it this far, no turning back now!`)
}

function uneventful(){
    if(heroLocation === "Zolgozd"){
        alert("The forest is quite, too quite. You cant help but feel like your being watched.")
        choice()
        
    }else if(heroLocation === "The Heart of Zolgozd"){
        alert("The damp musky smell of the cave is overwhelming. At least there haven't been any unwelcome suprises in a while.")
        choice()
    }
}

function encounter(){
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

function choice(){
    let journey = prompt(`Would you like to: (w)Continue Walking or (p) print your current stats?`)
    if (journey === "w"){
        alert("You continue on your quest")
    }else if (journey === "p"){
        print()
    }
}

function fight(creature){
    foeName = creature.name
    foeDescription = creature.description
    foeAtk = creature.atk
    foeHP = creature.hp
    foeHit = creature.hit
    foeCrt = creature.crt
    engage = prompt(`You've encounter ` + foeName + `. ` + foeDescription + ` (a) Attack or (r) Run?`)
    engage = engage.toLowerCase()
    if (engage === 'a'){
        attack()
    }else if (engage === 'r')
        run()
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
                        engage = prompt(`You ` + herosAttack + foeName + foesAttack + `Your current HP is ` + hero.hp + ` and the ` + foeName + `'s current HP is ` + foeHP + `. (a) Attack again or (r)Run?`)
                    }else{
                        confirm(`You ` + herosAttack + foeName + foesAttack + `Your current HP is ` + hero.hp + ` and the ` + foeName + `'s current HP is ` + foeHP + `. You have defeated the ` + foeName)
                        engage = ''
                    }
            }else{ 
            fallenHero()
        }
    }
}

function dragon(){
    const dragonEncounter = alert("The Dragon was sleeping so you cut of its head with no resistance. The fog disipates and you carry the head back tot the village. They are so happy they make you their king. But there is already a king in this land so he sends his menions to be head you and thus ends the tale of " + adventurerName)
    defeated = true
    alert(`You WON!!`)
    window.location.reload()
}

function fallenHero(){
    engage = ''
    alert(`You fought valiantly brave warrior, but the tale of ` + adventurerName + ` has come to an unfortunate end.`)
    window.location.reload()
}

while (hero.hp > 0 && defeated !== true){
    walk()
}