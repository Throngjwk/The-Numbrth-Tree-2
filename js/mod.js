let modInfo = {
	name: "The Numbruh Tree 2",
	id: "JHTNT2",
	author: "JeehanMoment",
	pointsName: "numbrth points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "JeehanMoment's Modded stuffs",
	discordLink: "https://unicode.org",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 24,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: ".1.2.1",
	name: "B&B",
}

let changelog = `x_x`
	

let winText = `Congratulations! You have reached the end and your do that this game, but for now for legacy...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if(hasUpgrade('zero', 24)) gain = gain.add(upgradeEffect('zero', 24))
	if(hasUpgrade('zero', 11)) gain = gain.times(upgradeEffect('zero', 11))
	if(hasUpgrade('zero', 12)) gain = gain.times(upgradeEffect('zero', 12))
	if(hasUpgrade('zero', 13)) gain = gain.times(upgradeEffect('zero', 13))
	if(hasUpgrade('zero', 15)) gain = gain.times(upgradeEffect('zero', 15))
	if(hasUpgrade('zero', 22)) gain = gain.times(upgradeEffect('zero', 22))
	gain = gain.times(buyableEffect('zero', 11))
	if(hasUpgrade('one', 11)) gain = gain.times(upgradeEffect('one', 11))
	if(hasUpgrade('one', 12)) gain = gain.times(upgradeEffect('one', 12))
	if(hasUpgrade('one', 15)) gain = gain.times(upgradeEffect('one', 15).p)
	if(hasUpgrade('two', 11)) gain = gain.times(upgradeEffect('two', 11))
	if(hasUpgrade('two', 14)) gain = gain.times(upgradeEffect('two', 14))
	if(hasUpgrade('two', 15)) gain = gain.times(upgradeEffect('two', 15).P)
	if (hasAchievement('ach', 31)) gain=gain.times(Decimal.div(180, 100))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	() => `<br>If you found a bug Please contact Unicode on Discord.`,
	"<br>",
	() => player.keepGoing ? `You're past endgame. at these The Game may not balanced  after this.` : ""
]

// Determines when the game "ends"
function isEndgame() {
	return player.two.total.gte(new Decimal("1e5"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(86400) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}