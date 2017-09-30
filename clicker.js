///setup
var prestige = 0, magicAllTime = 0, magic = 0,
generators ={
"teddy":{amount: 0, mult: 0.1},
"slime":{amount: 0, mult: 0.5},
"troll":{amount: 0, mult: 2},
"cookie" :{amount: 0, mult: 5},
"bologna" : {amount: 0, mult: 15}, 
"unicorn" : {amount: 0, mult: 50},
"lnmonster" : {amount: 0, mult: 250}, 
"bigfoot" : {amount: 0, mult: 1000},
"nymph" : {amount: 0, mult: 5000},
"dragon" : {amount: 0, mult: 25000}, 
"phoenix" : {amount: 0, mult: 100000},
"demonteddy" : {amount: 0, mult: 1000000}
};

var upgradeLevels = [1, 5, 25, 50, 100, 150, 200, 250, 300], 
multiplier = [10, 50, 500, 50000, 5000000, 500000000, 500000000000, 500000000000000, 500000000000000000];

//functions
function tab(n) {
   	if (n == 1){
		document.getElementById("tabpage1").style = ""
		document.getElementById("tabpage2").style = "display: none;"
		document.getElementById("tabpage3").style = "display: none;"
		document.getElementById("tabpage4").style = "display: none;"
	}else if (n == 2){
		document.getElementById("tabpage1").style = "display: none;"
		document.getElementById("tabpage2").style = ""
		document.getElementById("tabpage3").style = "display: none;"
		document.getElementById("tabpage4").style = "display: none;"
	}else if (n == 3){
		document.getElementById("tabpage1").style = "display: none;"
		document.getElementById("tabpage2").style = "display: none;"
		document.getElementById("tabpage3").style = ""
		document.getElementById("tabpage4").style = "display: none;"
	}else if (n == 4){
		document.getElementById("tabpage1").style = "display: none;"
		document.getElementById("tabpage2").style = "display: none;"
		document.getElementById("tabpage3").style = "display: none;"
		document.getElementById("tabpage4").style = ""
	}
}

function magicClick(number){
    magic = magic + number;
    document.getElementById("magic").innerHTML = rogueDec(magic);
};

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.magic !== "undefined"){
		magicAllTime = savegame.magicAllTime
		mps = savegame.mps
		magic = savegame.magic
		generators.teddy.amount = savegame.teddy
		generators.slime.amount = savegame.slime
		generators.troll.amount = savegame.troll
		generators.cookie.amount = savegame.cookie
		generators.bologna.amount = savegame.bologna
		generators.unicorn.amount = savegame.unicorn
		generators.lnmonster.amount = savegame.lnmonster
		generators.bigfoot.amount = savegame.bigfoot
		generators.nymph.amount = savegame.nymph
		generators.dragon.amount = savegame.dragon
		generators.phoenix.amount = savegame.phoenix
		generators.demonteddy.amount = savegame.demonteddy
		update()
	}
}

function save(){
	var save ={
		magicAllTime: magicAllTime,
		mps: mps,
		magic: magic,
		teddy: generators.teddy.amount,
		slime: generators.slime.amount,
		troll: generators.troll.amount,
		cookie: generators.cookie.amount,
		bologna: generators.bologna.amount,
		unicorn: generators.unicorn.amount,
		lnmonster: generators.lnmonster.amount,
		bigfoot: generators.bigfoot.amount,
		nymph: generators.nymph.amount,
		dragon: generators.dragon.amount,
		phoenix: generators.phoenix.amount,
		demonteddy: generators.demonteddy.amount
	}
localStorage.setItem("save",JSON.stringify(save));
}


function hardReset(){
	localStorage.removeItem("save");
	magic = 0;
	generators.teddy.amount = 0;
	generators.slime.amount = 0;
	generators.troll.amount = 0;
	generators.cookie.amount = 0;
	generators.bologna.amount = 0;
	generators.unicorn.amount = 0;
	generators.lnmonster.amount = 0;
	generators.bigfoot.amount = 0;
	generators.nymph.amount = 0;
	generators.dragon.amount = 0;
	generators.phoenix.amount = 0;
	generators.demonteddy.amount = 0;
	update()
};

function prestige(){
	if (window.confirm("Do you want to prestige?\nyou have " + magic + " magic") == true){
		prestige += 0.1;
		magic = 0;
		generators.teddy.amount = 0;
		generators.slime.amount = 0;
		generators.troll.amount = 0;
		generators.cookie.amount = 0;
		generators.bologna.amount = 0;
		generators.unicorn.amount = 0;
		generators.lnmonster.amount = 0;
		generators.bigfoot.amount = 0;
		generators.nymph.amount = 0;
		generators.dragon.amount = 0;
		generators.phoenix.amount = 0;
		generators.demonteddy.amount = 0;
		update()
	}
}

//get rid of rogue decimals
function rogueDec(n){
	if (n > 100){
		n = Math.round(n)
	}else{
	n = Math.round(n*10)/10;
}
	return n;
}

function buyUpgrade(building,basecost){
	let a = eval("generators." + building + ".amount;") 
	let index = upgradeLevels.findIndex(function(n){return n==a});
	let price = multiplier[index]*basecost;
	if (magic >= price){
		magic -= price;
		eval("generators." + building + ".mult *= 2;") 
		update();
	}
}

function addShopBtn(amountBought,building,basecost){
	if (document.getElementById("shopbtn1").style = "display: none;"){
		document.getElementById("shopbtn1").style = "" 
		document.getElementById("shopbtn1").innerHTML = building
		document.getElementById("shopbtn1").addEventListener('click',function(){
			eval("buyUpgrade('" + building + "'," + basecost + ")");
			document.getElementById("shopbtn1").style = "display: none;"
			})
	}else if (document.getElementById("shopbtn2").style = "display: none;"){
		document.getElementById("shopbtn2").style = "" 
		document.getElementById("shopbtn2").innerHTML = building
		document.getElementById("shopbtn2").addEventListener('click',function(){
			eval("buyUpgrade('" + building + "'," + basecost + ")");
			document.getElementById("shopbtn2").style = "display: none;"
			})
	}else if (document.getElementById("shopbtn3").style = "display: none;"){
		document.getElementById("shopbtn3").style = ""
		document.getElementById("shopbtn3").innerHTML = building
		document.getElementById("shopbtn3").addEventListener('click',function(){
			eval("buyUpgrade('" + building + "'," + basecost + ")");
			document.getElementById("shopbtn3").style = "display: none;"
			})
	}else if (document.getElementById("shopbtn4").style = "display: none;"){
		document.getElementById("shopbtn4").style = ""
		document.getElementById("shopbtn4").innerHTML = building
		document.getElementById("shopbtn4").addEventListener('click',function(){
			eval("buyUpgrade('" + building + "'," + basecost + ")");
			document.getElementById("shopbtn4").style = "display: none;"
			})
	}else if (document.getElementById("shopbtn5").style = "display: none;"){
		document.getElementById("shopbtn5").style = ""
		document.getElementById("shopbtn5").innerHTML = building
		document.getElementById("shopbtn5").addEventListener('click',function(){
			eval("buyUpgrade('" + building + "'," + basecost + ")");
			document.getElementById("shopbtn5").style = "display: none;"
			})
	}
}

function buyTeddy(){
	var cost = Math.floor(10*Math.pow(1.1,generators.teddy.amount));
	if (magic >= cost){
		magic -= rogueDec(cost);
		generators.teddy.amount = generators.teddy.amount + 1;
		newCost = Math.floor(10*Math.pow(1.1,generators.teddy.amount));
		document.getElementById("teddy").innerHTML = generators.teddy.amount;
		document.getElementById("teddyPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.teddy.amount) >= 0){
				addShopBtn(generators.teddy.amount,"teddy",10);
			}
		}
	update()
};

function buySlime(){
	var cost = Math.floor(50*Math.pow(1.1,generators.slime.amount));
	if (magic >= cost){
		magic -= cost;
		generators.slime.amount = generators.slime.amount + 1;
		newCost = Math.floor(50*Math.pow(1.1,generators.slime.amount));
		document.getElementById("slime").innerHTML = generators.slime.amount;
		document.getElementById("slimePrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.slime.amount) >= 0){
				addShopBtn(generators.slime.amount,"slime",50);
			}
		update()
	};
};

function buyTroll(){
	var cost = Math.floor(100*Math.pow(1.1,generators.troll.amount));
	if (magic >= cost){
		magic -= cost;
		generators.troll.amount = generators.troll.amount + 1;
		newCost = Math.floor(100*Math.pow(1.1,troll));
		document.getElementById("troll").innerHTML = generators.troll.amount;
		document.getElementById("trollPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.troll.amount) >= 0){
					addShopBtn(generators.troll.amount,"troll",100);
				}
	update()
	};
};

function buyCookie(){
	var cost = Math.floor(500*Math.pow(1.1,generators.cookie.amount));
	if (magic >= cost){
		magic -= cost;
		generators.cookie.amount = generators.cookie.amount + 1;
		newCost = Math.floor(500*Math.pow(1.1,cookie));
		document.getElementById("cookie").innerHTML = generators.cookie.amount;
		document.getElementById("cookiePrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.cookie.amount) >= 0){
				addShopBtn(generators.cookie.amount,"cookie",500);
			}
		update()
	};
};

function buyBologna(){
	var cost = Math.floor(2000*Math.pow(1.1,generators.bologna.amount));
	if (magic >= cost){
		magic -= cost;
		generators.bologna.amount = generators.bologna.amount + 1;
		newCost = Math.floor(2000*Math.pow(1.1,generators.bologna.amount));
		document.getElementById("bologna").innerHTML = generators.bologna.amount;
		document.getElementById("bolognaPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.bologna.amount) >= 0){
				addShopBtn(generators.bologna.amount,"bologna",2000);
			}
		update()
	};
};

function buyUnicorn(){
	var cost = Math.floor(10000*Math.pow(1.1,generators.unicorn.amount));
	if (magic >= cost){
		magic -= cost;
		generators.unicorn.amount = generators.unicorn.amount + 1;
		newCost = Math.floor(10000*Math.pow(1.1,generators.unicorn.amount));
		document.getElementById("unicorn").innerHTML = unicorn;
		document.getElementById("unicornPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.unicorn.amount) >= 0){
				addShopBtn(generators.unicorn.amount,"unicorn",10000);
			}
		update()
	};
};

function buyLnmonster(){
	var cost = Math.floor(80000*Math.pow(1.1,generators.lnmonster.amount));
	if (magic >= cost){
		magic -= cost;
		generators.lnmonster.amount = generators.lnmonster.amount + 1;
		newCost = Math.floor(80000*Math.pow(1.1,lnmonster));
		document.getElementById("lnmonster").innerHTML = generators.lnmonster.amount;
		document.getElementById("lnmonsterPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.lnmonster.amount) >= 0){
				addShopBtn(generators.lnmonster.amount,"lnmonster",80000);
			}
		update()
	};
};

function buyBigfoot(){
	var cost = Math.floor(400000*Math.pow(1.1,generators.bigfoot.amount));
	if (magic >= cost){
		magic -= cost;
		generators.bigfoot.amount = generators.bigfoot.amount + 1;
		newCost = Math.floor(400000*Math.pow(1.1,bigfoot));
		document.getElementById("bigfoot").innerHTML = generators.bigfoot.amount;
		document.getElementById("bigfootPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.bigfoot.amount) >= 0){
				addShopBtn(generators.bigfoot.amount,"bigfoot",400000);
			}
		update()
	};
};

function buyNymph(){
	var cost = Math.floor(1666666*Math.pow(1.1,generators.nymph.amount));
	if (magic >= cost){
		magic -= cost;
		generators.nymph.amount = generators.nymph.amount + 1;
		newCost = Math.floor(1666666*Math.pow(1.1,nymph));
		document.getElementById("nymph").innerHTML = generators.nymph.amount;
		document.getElementById("nymphPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.nymph.amount) >= 0){
				addShopBtn(generators.nymph.amount,"nymph",1666666);
			}
		update()
	};
};

function buyDragon(){
	var cost = Math.floor(1000000*Math.pow(1.1,generators.dragon.amount));
	if (magic >= cost){
		magic -= cost;
		generators.dragon.amount = generators.dragon.amount + 1;
		newCost = Math.floor(10000000*Math.pow(1.1,dragon));
		document.getElementById("dragon").innerHTML = generators.dragon.amount;
		document.getElementById("dragonPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.dragon.amount) >= 0){
				addShopBtn(generators.dragon.amount,"dragon",10000000);
			}
		update()
	};
};

function buyPhoenix(){
	var cost = Math.floor(55000000*Math.pow(1.1,generators.phoenix.amount));
	if (magic >= cost){
		magic -= cost;
		generators.phoenix.amount = generators.phoenix.amount + 1;
		newCost = Math.floor(55000000*Math.pow(1.1,generators.phoenix.amount));
		document.getElementById("phoenix").innerHTML = generators.phoenix.amount;
		document.getElementById("phoenixPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.phoenix.amount) >= 0){
				addShopBtn(generators.phoenix.amount,"phoenix",55000000);
			}
		update()
	};
};

function buyDemonteddy(){
	var cost = Math.floor(1000000000*Math.pow(1.1,generators.demonteddy.amount));
	if (magic >= cost){
		magic -= cost;
		generators.demonteddy.amount = generators.demonteddy.amount + 1;
		newCost = Math.floor(1000000000*Math.pow(1.1,generators.demonteddy.amount));
		document.getElementById("demonteddy").innerHTML = generators.demonteddy.amount;
		document.getElementById("demonteddyPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		if (upgradeLevels.indexOf(generators.demonteddy.amount) >= 0){
				addShopBtn(generators.demonteddy.amount,"demonteddy",50);
			}
		update()
	};
};

window.setInterval(function(){
	magicClick(rogueDec(generators.teddy.amount*generators.teddy.mult+generators.slime.amount*generators.slime.mult+generators.troll.amount*generators.troll.mult+generators.cookie.amount*generators.cookie.mult+generators.bologna.amount*generators.bologna.mult+generators.unicorn.amount*generators.unicorn.mult+generators.lnmonster.amount*generators.lnmonster.mult+generators.bigfoot.amount*generators.bigfoot.mult+generators.nymph.amount*generators.nymph.mult+generators.dragon.amount*generators.dragon.mult+generators.phoenix.amount*generators.phoenix.mult+generators.demonteddy.amount*generators.demonteddy.mult)/25);
	update()
}, 40);

window.setInterval(function(){
	save()
}, 10000);

function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t","q","Q","s","S"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}

function update(){
	document.getElementById("mps").innerHTML = abbreviateNumber(rogueDec(generators.teddy.amount*generators.teddy.mult+generators.slime.amount*generators.slime.mult+generators.troll.amount*generators.troll.mult+generators.cookie.amount*generators.cookie.mult+generators.bologna.amount*generators.bologna.mult+generators.unicorn.amount*generators.unicorn.mult+generators.lnmonster.amount*generators.lnmonster.mult+generators.bigfoot.amount*generators.bigfoot.mult+generators.nymph.amount*generators.nymph.mult+generators.dragon.amount*generators.dragon.mult+generators.phoenix.amount*generators.phoenix.mult+generators.demonteddy.amount*generators.demonteddy.mult))
	document.getElementById("magic").innerHTML = abbreviateNumber(rogueDec(magic))
	document.getElementById("teddy").innerHTML = generators.teddy.amount
	document.getElementById("slime").innerHTML = generators.slime.amount
	document.getElementById("troll").innerHTML = generators.troll.amount
	document.getElementById("cookie").innerHTML = generators.cookie.amount
	document.getElementById("bologna").innerHTML = generators.bologna.amount
	document.getElementById("unicorn").innerHTML = generators.unicorn.amount
	document.getElementById("lnmonster").innerHTML = generators.lnmonster.amount
	document.getElementById("bigfoot").innerHTML = generators.bigfoot.amount
	document.getElementById("nymph").innerHTML = generators.nymph.amount
	document.getElementById("dragon").innerHTML = generators.dragon.amount
	document.getElementById("phoenix").innerHTML = generators.phoenix.amount
	document.getElementById("demonteddy").innerHTML = generators.demonteddy.amount
	document.getElementById("teddyPrice").innerHTML = abbreviateNumber(Math.floor(10*Math.pow(1.1,generators.teddy.amount)))
	document.getElementById("slimePrice").innerHTML = abbreviateNumber(Math.floor(50*Math.pow(1.1,generators.slime.amount)))
	document.getElementById("trollPrice").innerHTML = abbreviateNumber(Math.floor(100*Math.pow(1.1,generators.troll.amount)))
	document.getElementById("cookiePrice").innerHTML = abbreviateNumber(Math.floor(500*Math.pow(1.1,generators.cookie.amount)))
	document.getElementById("bolognaPrice").innerHTML = abbreviateNumber(Math.floor(2000*Math.pow(1.1,generators.bologna.amount)))
	document.getElementById("unicornPrice").innerHTML = abbreviateNumber(Math.floor(10000*Math.pow(1.1,generators.unicorn.amount)))
	document.getElementById("lnmonsterPrice").innerHTML = abbreviateNumber(Math.floor(80000*Math.pow(1.1,generators.lnmonster.amount)))
	document.getElementById("bigfootPrice").innerHTML = abbreviateNumber(Math.floor(400000*Math.pow(1.1,generators.bigfoot.amount)))
	document.getElementById("nymphPrice").innerHTML = abbreviateNumber(Math.floor(1666666*Math.pow(1.1,generators.nymph.amount)))
	document.getElementById("dragonPrice").innerHTML = abbreviateNumber(Math.floor(10000000*Math.pow(1.1,generators.dragon.amount)))
	document.getElementById("phoenixPrice").innerHTML = abbreviateNumber(Math.floor(55000000*Math.pow(1.1,generators.phoenix.amount)))
	document.getElementById("demonteddyPrice").innerHTML = abbreviateNumber(Math.floor(1000000000*Math.pow(1.1,generators.demonteddy.amount)))}
