var magicAllTime = 0,
    magic = 0,
    numberType = 0,
    clickingMult = 0,
    clickPower = 1,
    ind = 0,
    magicBefore = 0,
    magicAfter = 0,
    shopbtn1event = null,
    shopbtn2event = null,
    shopbtn3event = null,
    shopbtn4event = null,
    shopbtn5event = null,
    shopbtn6event = null,
    generators = {
        "teddy": {
            amount: 0,
            mult: 0.1
        },
        "slime": {
            amount: 0,
            mult: 0.5
        },
        "troll": {
            amount: 0,
            mult: 2
        },
        "cookie": {
            amount: 0,
            mult: 5
        },
        "bologna": {
            amount: 0,
            mult: 15
        },
        "unicorn": {
            amount: 0,
            mult: 50
        },
        "lnmonster": {
            amount: 0,
            mult: 250
        },
        "bigfoot": {
            amount: 0,
            mult: 1000
        },
        "nymph": {
            amount: 0,
            mult: 5000
        },
        "dragon": {
            amount: 0,
            mult: 25000
        },
        "phoenix": {
            amount: 0,
            mult: 100000
        },
        "demonteddy": {
            amount: 0,
            mult: 1000000
        }
    },
    upgradeLevels = [1, 5, 25, 50, 100, 150, 200, 250, 300],
    multiplier = [10, 50, 500, 50000, 5000000, 500000000, 500000000000, 500000000000000, 500000000000000000],
    prices = [10, 50, 100, 500, 2000, 10000, 80000, 400000, 1666666, 10000000, 55000000, 1000000000],
    clickUpgradeAppear = [20, 200, 4000, 4000000, 40000000, 400000000, 4000000000, 4000000000000, 4000000000000000, 4000000000000000000, 4000000000000000000000],
    clickPrices = [100, 500, 10000, 100000, 10000000, 100000000, 1000000000, 10000000000, 10000000000000, 10000000000000000, 10000000000000000000, 10000000000000000000000],
    gen = ["teddy", "slime", "troll", "cookie", "bologna", "unicorn", "lnmonster", "bigfoot", "nymph", "dragon", "phoenix", "demonteddy"];

//functions
function tab(n) {
    if (n == 1) {
        document.getElementById("tabpage1").style = "height: 75%; width: 58%; overflow-y: scroll; border: 3px solid white";
        document.getElementById("tabpage2").style = "display: none;";
        document.getElementById("tabpage3").style = "display: none;";
        document.getElementById("tabpage4").style = "display: none;";
    } else if (n == 2) {
        document.getElementById("tabpage1").style = "display: none;";
        document.getElementById("tabpage2").style = "height: 75%; width: 58%; overflow-y: auto; border: 3px solid white;";
        document.getElementById("tabpage3").style = "display: none;";
        document.getElementById("tabpage4").style = "display: none;";
        document.getElementById("tabbtn2").style = "background-color: white;";
    } else if (n == 3) {
        document.getElementById("tabpage1").style = "display: none;";
        document.getElementById("tabpage2").style = "display: none;";
        document.getElementById("tabpage3").style = "height: 75%; width: 58%; overflow-y: auto; border: 3px solid white;";
        document.getElementById("tabpage4").style = "display: none;";
    } else if (n == 4) {
        document.getElementById("tabpage1").style = "display: none;";
        document.getElementById("tabpage2").style = "display: none;";
        document.getElementById("tabpage3").style = "display: none;";
        document.getElementById("tabpage4").style = "height: 75%; width: 58%; overflow-y: auto; border: 3px solid white;";
    }
}

function magicClick(n) {
    if (n == 'x') {
        magicBefore = magic;
        magic += clickPower + clickingMult * (generators.teddy.amount + generators.slime.amount + generators.troll.amount + generators.cookie.amount + generators.bologna.amount + generators.unicorn.amount + generators.lnmonster.amount + generators.bigfoot.amount + generators.nymph.amount + generators.dragon.amount + generators.phoenix.amount + generators.demonteddy.amount);
        magicAfter = magic;
        if ((magicBefore < clickUpgradeAppear[ind]) && (magicAfter >= clickUpgradeAppear[ind])) {
            console.log("thingiemcthing");
            addClickShopBtn(ind);
            ++ind;
        }
    } else {
        magicBefore = magic;
        magic += n;
        magicAfter = magic;
        if ((magicBefore < clickUpgradeAppear[ind]) && (magicAfter >= clickUpgradeAppear[ind])) {
            console.log("thingiemcthing");
            addClickShopBtn(ind);
            ++ind;
        }
    }
    document.getElementById("magic").innerHTML = abbreviateNumber(rogueDec(magic));
}

function addClickShopBtnEvent(index, number){
	document.getElementById("shopbtn" + number).innerHTML = "Upgrade Clicking <br> Price: " + clickPrices[index];
    document.getElementById("shopbtn" + number).className = "used";
    document.getElementById("shopbtn" + number).style = "";
    document.getElementById("shopbtn" + number).addEventListener('click', function(){clickClickShopBtn(index, number);});
}

function addClickShopBtn(index) {
    document.getElementById("tabbtn2").style = "background-color: yellow;";
    if (document.getElementById("shopbtn1").className == "empty") {
        addClickShopBtnEvent(index,1)
        shopbtn1event = "document.getElementById('shopbtn1').addEventListener('click', function(){clickClickShopBtn(" + index + ", 1);});";
    } else if (document.getElementById("shopbtn2").className == "empty") {
        addClickShopBtnEvent(index,2)
        shopbtn2event = "document.getElementById('shopbtn2').addEventListener('click', function(){clickClickShopBtn(" + index + ", 2);});";
    } else if (document.getElementById("shopbtn3").className == "empty") {
        addClickShopBtnEvent(index,3)
        shopbtn3event = "document.getElementById('shopbtn3').addEventListener('click', function(){clickClickShopBtn(" + index + ", 3);});";
    } else if (document.getElementById("shopbtn4").className == "empty") {
        addClickShopBtnEvent(index,4)
        shopbtn4event = "document.getElementById('shopbtn4').addEventListener('click', function(){clickClickShopBtn(" + index + ", 4);});";
    } else if (document.getElementById("shopbtn5").className == "empty") {
        addClickShopBtnEvent(index,5)
        shopbtn5event = "document.getElementById('shopbtn5').addEventListener('click', function(){clickClickShopBtn(" + index + ", 5);});";
    } else if (document.getElementById("shopbtn6").className == "empty") {
        addClickShopBtnEvent(index,6)
        shopbtn6event = "document.getElementById('shopbtn6').addEventListener('click', function(){clickClickShopBtn(" + index + ", 6);});";
    }
}

function clickClickShopBtn(index, number) {
    if (magic >= clickPrices[index]) {
    	var oldElement = document.getElementById("shopbtn" + number);
        var newElement = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(newElement, oldElement);
        document.getElementById("shopbtn" + number).style = "display: none;";
        document.getElementById("shopbtn" + number).className = "empty";
        document.getElementById("shopbtn" + number).onmousedown = "";
        magic -= clickPrices[index];
        if ((index == 0) || (index == 1) || (index == 2)) {
            clickPower *= 2;
        } else if (index == 3) {
            clickingMult = 0.1;
        } else if (index == 4) {
            clickingMult = 0.5;
        } else if ((index >= 5) && (index <= 11)) {
            clickingMult *= 10;
        }
    }
}

function save() {
    var save = {
        shopbtn1: document.getElementById("shopbtn1").innerHTML,
        shopbtn1style: document.getElementById("shopbtn1").style,
        shopbtn1class: document.getElementById("shopbtn1").className,
        shopbtn1event: shopbtn1event,
        shopbtn2: document.getElementById("shopbtn2").innerHTML,
        shopbtn2style: document.getElementById("shopbtn2").style,
        shopbtn2class: document.getElementById("shopbtn2").className,
        shopbtn2event: shopbtn2event,
        shopbtn3: document.getElementById("shopbtn3").innerHTML,
        shopbtn3style: document.getElementById("shopbtn3").style,
        shopbtn3class: document.getElementById("shopbtn3").className,
        shopbtn3event: shopbtn3event,
        shopbtn4: document.getElementById("shopbtn4").innerHTML,
        shopbtn4style: document.getElementById("shopbtn4").style,
        shopbtn4class: document.getElementById("shopbtn4").className,
        shopbtn4event: shopbtn4event,
        shopbtn5: document.getElementById("shopbtn5").innerHTML,
        shopbtn5style: document.getElementById("shopbtn5").style,
        shopbtn5class: document.getElementById("shopbtn5").className,
        shopbtn5event: shopbtn5event,
        shopbtn6: document.getElementById("shopbtn6").innerHTML,
        shopbtn6style: document.getElementById("shopbtn6").style,
        shopbtn6class: document.getElementById("shopbtn6").className,
        shopbtn6event: shopbtn6event,
        magic: magic,
        clickingMult: clickingMult,
        ind: ind,
        clickPower: clickPower,
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
        demonteddy: generators.demonteddy.amount,
        teddymult: generators.teddy.mult,
        slimemult: generators.slime.mult,
        trollmult: generators.troll.mult,
        cookiemult: generators.cookie.mult,
        bolognamult: generators.bologna.mult,
        unicornmult: generators.unicorn.mult,
        lnmonstermult: generators.lnmonster.mult,
        bigfootmult: generators.bigfoot.mult,
        nymphmult: generators.nymph.mult,
        dragonmult: generators.dragon.mult,
        phoenixmult: generators.phoenix.mult,
        demonteddymult: generators.demonteddy.mult
    };
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (savegame.shopbtn1class == "used") {
        document.getElementById("shopbtn1").innerHTML = savegame.shopbtn1;
        document.getElementById("shopbtn1").style = savegame.shopbtn1style;
        document.getElementById("shopbtn1").className = savegame.shopbtn1class;
        eval(savegame.shopbtn1event);
    } else {
        document.getElementById("shopbtn1").innerHTML = "A";
        document.getElementById("shopbtn1").style = "display: none;";
        document.getElementById("shopbtn1").className = "empty";
    }
    if (savegame.shopbtn2class == "used") {
        document.getElementById("shopbtn2").innerHTML = savegame.shopbtn2;
        document.getElementById("shopbtn2").style = savegame.shopbtn2style;
        document.getElementById("shopbtn2").className = savegame.shopbtn2class;
        eval(savegame.shopbtn2event);
    } else {
        document.getElementById("shopbtn2").innerHTML = "B";
        document.getElementById("shopbtn2").style = "display: none;";
        document.getElementById("shopbtn2").className = "empty";
    }
    if (savegame.shopbtn3class == "used") {
        document.getElementById("shopbtn3").innerHTML = savegame.shopbtn3;
        document.getElementById("shopbtn3").style = savegame.shopbtn3style;
        document.getElementById("shopbtn3").className = savegame.shopbtn3class;
        eval(savegame.shopbtn3event);
    } else {
        document.getElementById("shopbtn3").innerHTML = "C";
        document.getElementById("shopbtn3").style = "display: none;";
        document.getElementById("shopbtn3").className = "empty";
    }
    if (savegame.shopbtn4 == "used") {
        document.getElementById("shopbtn4").innerHTML = savegame.shopbtn4;
        document.getElementById("shopbtn4").style = savegame.shopbtn4style;
        document.getElementById("shopbtn4").className = savegame.shopbtn4class;
        eval(savegame.shopbtn4event);
    } else {
        document.getElementById("shopbtn4").innerHTML = "D";
        document.getElementById("shopbtn4").style = "display: none;";
        document.getElementById("shopbtn4").className = "empty";
    }
    if (savegame.shopbtn5 == "used") {
        document.getElementById("shopbtn5").innerHTML = savegame.shopbtn5;
        document.getElementById("shopbtn5").style = savegame.shopbtn5style;
        document.getElementById("shopbtn5").className = savegame.shopbtn5class;
        eval(savegame.shopbtn5event);
    } else {
        document.getElementById("shopbtn5").innerHTML = "E";
        document.getElementById("shopbtn5").style = "display: none;";
        document.getElementById("shopbtn5").className = "empty";
    }
    if (savegame.shopbtn6 == "used") {
        document.getElementById("shopbtn6").innerHTML = savegame.shopbtn6;
        document.getElementById("shopbtn6").style = savegame.shopbtn6style;
        document.getElementById("shopbtn6").className = savegame.shopbtn6class;
        eval(savegame.shopbtn6event);
    } else {
        document.getElementById("shopbtn6").innerHTML = "F";
        document.getElementById("shopbtn6").style = "display: none;";
        document.getElementById("shopbtn6").className = "empty";
    }
    if (typeof savegame.magic !== "undefined") {
        magic = savegame.magic;
        clickingMult = savegame.clickingMult;
        ind = savegame.ind;
        clickPower = savegame.clickPower;
        generators.teddy.amount = savegame.teddy;
        generators.slime.amount = savegame.slime;
        generators.troll.amount = savegame.troll;
        generators.cookie.amount = savegame.cookie;
        generators.bologna.amount = savegame.bologna;
        generators.unicorn.amount = savegame.unicorn;
        generators.lnmonster.amount = savegame.lnmonster;
        generators.bigfoot.amount = savegame.bigfoot;
        generators.nymph.amount = savegame.nymph;
        generators.dragon.amount = savegame.dragon;
        generators.phoenix.amount = savegame.phoenix;
        generators.demonteddy.amount = savegame.demonteddy;
        generators.teddy.mult = savegame.teddymult;
        generators.slime.mult = savegame.slimemult;
        generators.troll.mult = savegame.trollmult;
        generators.cookie.mult = savegame.cookiemult;
        generators.bologna.mult = savegame.bolognamult;
        generators.unicorn.mult = savegame.unicornmult;
        generators.lnmonster.mult = savegame.lnmonstermult;
        generators.bigfoot.mult = savegame.bigfootmult;
        generators.nymph.mult = savegame.nymphmult;
        generators.dragon.mult = savegame.dragonmult;
        generators.phoenix.mult = savegame.phoenixmult;
        generators.demonteddy.mult = savegame.demonteddymult;
        update();
    }
}

function hardReset() {
    localStorage.removeItem("save");
    magic = 0;
    ind = 0;
    clickingMult = 0;
    clickPower = 1;
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
    generators.teddy.mult = 0.1;
    generators.slime.mult = 0.5;
    generators.troll.mult = 2;
    generators.cookie.mult = 5;
    generators.bologna.mult = 15;
    generators.unicorn.mult = 50;
    generators.lnmonster.mult = 250;
    generators.bigfoot.mult = 1000;
    generators.nymph.mult = 5000;
    generators.dragon.mult = 25000;
    generators.phoenix.mult = 100000;
    generators.demonteddy.mult = 1000000;
    document.getElementById("shopbtn1").innerHTML = "A";
    document.getElementById("shopbtn1").className = "empty";
    document.getElementById("shopbtn1").style = "display: none;";
    document.getElementById("shopbtn2").innerHTML = "B";
    document.getElementById("shopbtn2").className = "empty";
    document.getElementById("shopbtn2").style = "display: none;";
    document.getElementById("shopbtn3").innerHTML = "C";
    document.getElementById("shopbtn3").className = "empty";
    document.getElementById("shopbtn3").style = "display: none;";
    document.getElementById("shopbtn4").innerHTML = "D";
    document.getElementById("shopbtn4").className = "empty";
    document.getElementById("shopbtn4").style = "display: none;";
    document.getElementById("shopbtn5").innerHTML = "E";
    document.getElementById("shopbtn5").className = "empty";
    document.getElementById("shopbtn5").style = "display: none;";
    document.getElementById("shopbtn6").innerHTML = "F";
    document.getElementById("shopbtn6").className = "empty";
    document.getElementById("shopbtn6").style = "display: none;";
    for (var i = 0; i < 7; ++i) {
    	if (document.getElementById("shopbtn" + i).className == "used"){
    	    var oldElement = document.getElementById("shopbtn" + i);
        	var newElement = oldElement.cloneNode(true);
        	oldElement.parentNode.replaceChild(newElement, oldElement);
    	}
    }
    update();
}

function prestige() {
    if (window.confirm("Do you want to prestige?\nyou have " + magic + " magic")) {
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
        update();
    }
}

//get rid of rogue decimals
function rogueDec(n) {
    if (n > 1000) {
        n = Math.round(n);
    } else {
        n = Math.round(n * 10) / 10;
    }
    return n;
}

function clickShopBtn(number, price, building) {
    if (magic >= price) {
    	var oldElement = document.getElementById("shopbtn" + number);
        var newElement = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(newElement, oldElement);
        document.getElementById("shopbtn" + number).style = "display: none;";
        document.getElementById("shopbtn" + number).className = "empty";
        document.getElementById("shopbtn" + number).onmousedown = "";
        document.getElementById("shopbtn" + number).removeEventListener('click',function(){clickShopBtn(number, price, building);});
        magic -= price;
        document.getElementById("magic").innerHTML = abbreviateNumber(rogueDec(magic));
        eval("generators." + building + ".mult *= 2;");
        if (number == 1) {
            shopbtn1event = null;
        } else if (number == 2) {
            shopbtn2event = null;
        } else if (number == 3) {
            shopbtn3event = null;
        } else if (number == 4) {
            shopbtn4event = null;
        } else if (number == 5) {
            shopbtn5event = null;
        } else if (number == 6) {
            shopbtn6event = null;
        }
        update();
        save();
    }
}

function addShopBtnEvent(number, price, building, basecost) {
    document.getElementById("shopbtn" + number).style = "";
    document.getElementById("shopbtn" + number).className = "used";
    document.getElementById("shopbtn" + number).innerHTML = "Building: " + building + "<br> Cost: " + price;
    document.getElementById("shopbtn" + number).addEventListener('click', function() {clickShopBtn(number, price, building);});
    if (number == 1) {
        shopbtn1event = "document.getElementById('shopbtn1').addEventListener('click',function(){clickShopBtn(1," + price + "," + building + ");});";
        console.log(shopbtn1event)
    } else if (number == 2) {
        shopbtn2event = "document.getElementById('shopbtn2').addEventListener('click',function(){clickShopBtn(2," + price + "," + building + ");});";
    	console.log(shopbtn2event)
    } else if (number == 3) {
        shopbtn3event = "document.getElementById('shopbtn3').addEventListener('click',function(){clickShopBtn(3," + price + "," + building + ");});";
    	console.log(shopbtn3event)
    } else if (number == 4) {
        shopbtn4event = "document.getElementById('shopbtn4').addEventListener('click',function(){clickShopBtn(4," + price + "," + building + ");});";
    	console.log(shopbtn4event)
    } else if (number == 5) {
        shopbtn5event = "document.getElementById('shopbtn5').addEventListener('click',function(){clickShopBtn(5," + price + "," + building + ");});";
    	console.log(shopbtn5event)
    } else if (number == 6) {
        shopbtn6event = "document.getElementById('shopbtn6').addEventListener('click',function(){clickShopBtn(6," + price + "," + building + ");});";
    	console.log(shopbtn6event)
    }
    document.getElementById("tabbtn2").style = "background-color: yellow";
}

function addShopBtn(building, basecost) {
    var a = eval("generators." + building + ".amount;");
    var number = upgradeLevels.findIndex(function(n) {
        return n == a;
    });
    var price = multiplier[number] * basecost;
    if (document.getElementById("shopbtn1").className == "empty") {
        addShopBtnEvent(1, price, building, basecost);
    } else if (document.getElementById("shopbtn2").className == "empty") {
        addShopBtnEvent(2, price, building, basecost);
    } else if (document.getElementById("shopbtn3").className == "empty") {
        addShopBtnEvent(3, price, building, basecost);
    } else if (document.getElementById("shopbtn4").className == "empty") {
        addShopBtnEvent(4, price, building, basecost);
    } else if (document.getElementById("shopbtn5").className == "empty") {
        addShopBtnEvent(5, price, building, basecost);
    } else if (document.getElementById("shopbtn6").className == "empty") {
        addShopBtnEvent(6, price, building, basecost);
    }
}

function buy(upgrade) {
    var building = eval("generators." + upgrade + ".amount");
    var n = gen.findIndex(function(N) {
        return N == upgrade;
    });
    var m = prices[n];
    var cost = Math.floor(m * Math.pow(1.1, building));
    if (magic >= cost) {
        magic -= rogueDec(cost);
        ++building;
        if (upgrade == "teddy") {
            ++generators.teddy.amount;
        } else if (upgrade == "slime") {
            ++generators.slime.amount;
        } else if (upgrade == "troll") {
            ++generators.troll.amount;
        } else if (upgrade == "cookie") {
            ++generators.cookie.amount;
        } else if (upgrade == "bologna") {
            ++generators.bologna.amount;
        } else if (upgrade == "unicorn") {
            ++generators.unicorn.amount;
        } else if (upgrade == "lnmonster") {
            ++generators.lnmonster.amount;
        } else if (upgrade == "bigfoot") {
            ++generators.bigfoot.amount;
        } else if (upgrade == "nymph") {
            ++generators.nymph.amount;
        } else if (upgrade == "dragon") {
            ++generators.dragon.amount;
        } else if (upgrade == "phoenix") {
            ++generators.phoenix.amount;
        } else if (upgrade == "demonteddy") {
            ++generators.demonteddy.amount;
        }
        newCost = Math.floor(m * Math.pow(1.1, building));
        document.getElementById(upgrade + "Price").innerHTML = rogueDec(newCost);
        document.getElementById("magic").innerHTML = rogueDec(magic);
        if (upgradeLevels.indexOf(building) >= 0) {
            addShopBtn(upgrade, m);
        }
        update();
    }
}

window.setInterval(function() {
    magicClick(rogueDec(generators.teddy.amount * generators.teddy.mult + generators.slime.amount * generators.slime.mult + generators.troll.amount * generators.troll.mult + generators.cookie.amount * generators.cookie.mult + generators.bologna.amount * generators.bologna.mult + generators.unicorn.amount * generators.unicorn.mult + generators.lnmonster.amount * generators.lnmonster.mult + generators.bigfoot.amount * generators.bigfoot.mult + generators.nymph.amount * generators.nymph.mult + generators.dragon.amount * generators.dragon.mult + generators.phoenix.amount * generators.phoenix.mult + generators.demonteddy.amount * generators.demonteddy.mult) / 25);
    document.getElementById("magic").innerHTML = abbreviateNumber(rogueDec(magic));
}, 40);

window.setInterval(function() {
    save();
}, 10000);

function abbreviateNumber(value) {
    if (numberType == 0) {
        var newValue = value;
        if (value >= 1000) {
            var suffixes = ["", "k", "m", "b", "t", "q", "Q", "s", "S"];
            var suffixNum = Math.floor(("" + value).length / 3);
            var shortValue = '';
            for (var precision = 3; precision >= 3; precision--) {
                shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
                var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
                if (dotLessShortValue.length <= 2) {
                    break;
                }
            }
            if (shortValue % 1 != 0) shortNum = shortValue.toFixed(1);
            newValue = shortValue + suffixes[suffixNum];
        }
        return newValue;
    } else if (numberType == 1) {
        return value.toExponential(2);
    } else if (numberType == 2) {
        return value;
    }
}

function numberTypeChange() {
    if (numberType == 0) {
        ++numberType;
        document.getElementById("nmrtype").innerHTML = "Scientific Notation";
    } else if (numberType == 1) {
        ++numberType;
        document.getElementById("nmrtype").innerHTML = "Full Number";
    } else if (numberType == 2) {
        numberType = 0;
        document.getElementById("nmrtype").innerHTML = "Shortened Notation";
    }
}

function update() {
    document.getElementById("mps").innerHTML = abbreviateNumber(rogueDec(generators.teddy.amount * generators.teddy.mult + generators.slime.amount * generators.slime.mult + generators.troll.amount * generators.troll.mult + generators.cookie.amount * generators.cookie.mult + generators.bologna.amount * generators.bologna.mult + generators.unicorn.amount * generators.unicorn.mult + generators.lnmonster.amount * generators.lnmonster.mult + generators.bigfoot.amount * generators.bigfoot.mult + generators.nymph.amount * generators.nymph.mult + generators.dragon.amount * generators.dragon.mult + generators.phoenix.amount * generators.phoenix.mult + generators.demonteddy.amount * generators.demonteddy.mult));
    document.getElementById("magic").innerHTML = abbreviateNumber(rogueDec(magic));
    document.getElementById("teddy").innerHTML = generators.teddy.amount;
    document.getElementById("slime").innerHTML = generators.slime.amount;
    document.getElementById("troll").innerHTML = generators.troll.amount;
    document.getElementById("cookie").innerHTML = generators.cookie.amount;
    document.getElementById("bologna").innerHTML = generators.bologna.amount;
    document.getElementById("unicorn").innerHTML = generators.unicorn.amount;
    document.getElementById("lnmonster").innerHTML = generators.lnmonster.amount;
    document.getElementById("bigfoot").innerHTML = generators.bigfoot.amount;
    document.getElementById("nymph").innerHTML = generators.nymph.amount;
    document.getElementById("dragon").innerHTML = generators.dragon.amount;
    document.getElementById("phoenix").innerHTML = generators.phoenix.amount;
    document.getElementById("demonteddy").innerHTML = generators.demonteddy.amount;
    document.getElementById("teddyPrice").innerHTML = abbreviateNumber(Math.floor(10 * Math.pow(1.1, generators.teddy.amount)));
    document.getElementById("slimePrice").innerHTML = abbreviateNumber(Math.floor(50 * Math.pow(1.1, generators.slime.amount)));
    document.getElementById("trollPrice").innerHTML = abbreviateNumber(Math.floor(100 * Math.pow(1.1, generators.troll.amount)));
    document.getElementById("cookiePrice").innerHTML = abbreviateNumber(Math.floor(500 * Math.pow(1.1, generators.cookie.amount)));
    document.getElementById("bolognaPrice").innerHTML = abbreviateNumber(Math.floor(2000 * Math.pow(1.1, generators.bologna.amount)));
    document.getElementById("unicornPrice").innerHTML = abbreviateNumber(Math.floor(10000 * Math.pow(1.1, generators.unicorn.amount)));
    document.getElementById("lnmonsterPrice").innerHTML = abbreviateNumber(Math.floor(80000 * Math.pow(1.1, generators.lnmonster.amount)));
    document.getElementById("bigfootPrice").innerHTML = abbreviateNumber(Math.floor(400000 * Math.pow(1.1, generators.bigfoot.amount)));
    document.getElementById("nymphPrice").innerHTML = abbreviateNumber(Math.floor(1666666 * Math.pow(1.1, generators.nymph.amount)));
    document.getElementById("dragonPrice").innerHTML = abbreviateNumber(Math.floor(10000000 * Math.pow(1.1, generators.dragon.amount)));
    document.getElementById("phoenixPrice").innerHTML = abbreviateNumber(Math.floor(55000000 * Math.pow(1.1, generators.phoenix.amount)));
    document.getElementById("demonteddyPrice").innerHTML = abbreviateNumber(Math.floor(1000000000 * Math.pow(1.1, generators.demonteddy.amount)));
}
