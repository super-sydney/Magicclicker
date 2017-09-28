var prestige = 0, magicAllTime = 0, magic = 0, teddy = 0, slime = 0, troll = 0, cookie = 0, bologna = 0, unicorn = 0, lnmonster = 0, bigfoot = 0,
nymph = 0, dragon = 0, phoenix = 0, demonteddy = 0;

//getting magic
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
		teddy = savegame.teddy
		troll = savegame.troll
		cookie = savegame.cookie
		bologna = savegame.bologna
		unicorn = savegame.unicorn
		lnmonster = savegame.lnmonster
		bigfoot = savegame.bigfoot
		nymph = savegame.nymph
		dragon = savegame.dragon
		phoenix = savegame.phoenix
		demonteddy = savegame.demonteddy
		update()
	}
}

function save(){
	var save ={
		magicAllTime: magicAllTime,
		mps: mps,
		magic: magic,
		teddy: teddy,
		slime: slime,
		troll: troll,
		cookie: cookie,
		bologna: bologna,
		unicorn: unicorn,
		lnmonster: lnmonster,
		bigfoot: bigfoot,
		nymph: nymph,
		dragon: dragon,
		phoenix: phoenix,
		demonteddy: demonteddy
	}
localStorage.setItem("save",JSON.stringify(save));
}


function hardReset(){
	localStorage.removeItem("save");
	magic = 0;
	teddy = 0;
	slime = 0;
	troll = 0;
	cookie = 0;
	bologna = 0;
	unicorn = 0;
	lnmonster = 0;
	bigfoot = 0;
	nymph = 0;
	dragon = 0;
	phoenix = 0;
	demonteddy = 0;
	update()
};

function prestige(){
	if (window.confirm("Do you want to prestige?\nyou have " + magic + " magic") == true){
		prestige += 0.1;
		magic = 0;
		teddy = 0;
		slime = 0;
		troll = 0;
		cookie = 0;
		bologna = 0;
		unicorn = 0;
		lnmonster = 0;
		bigfoot = 0;
		nymph = 0;
		dragon = 0;
		phoenix = 0;
		demonteddy = 0;
		update()
	}
}

//get rid of rogue decimals
function rogueDec(n){
	n = Math.round(n*10)/10
	return n;
}

function buyTeddy(){
	var cost = Math.floor(10*Math.pow(1.1,teddy));
	if (magic >= cost){
		magic -= rogueDec(cost);
		teddy = teddy + 1;
		newCost = Math.floor(10*Math.pow(1.1,teddy));
		document.getElementById("teddy").innerHTML = teddy;
		document.getElementById("teddyPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buySlime(){
	var cost = Math.floor(50*Math.pow(1.1,slime));
	if (magic >= cost){
		magic -= cost;
		slime = slime + 1;
		newCost = Math.floor(50*Math.pow(1.1,slime));
		document.getElementById("slime").innerHTML = slime;
		document.getElementById("slimePrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyTroll(){
	var cost = Math.floor(100*Math.pow(1.1,troll));
	if (magic >= cost){
		magic -= cost;
	troll = troll + 1;
	newCost = Math.floor(100*Math.pow(1.1,troll));
	document.getElementById("troll").innerHTML = troll;
	document.getElementById("trollPrice").innerHTML = rogueDec(newCost);
	document.getElementById("magic").innerHTML = rogueDec(magic);
	update()
	};
};

function buyCookie(){
	var cost = Math.floor(500*Math.pow(1.1,cookie));
	if (magic >= cost){
		magic -= cost;
		cookie = cookie + 1;
		newCost = Math.floor(500*Math.pow(1.1,cookie));
		document.getElementById("cookie").innerHTML = cookie;
		document.getElementById("cookiePrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyBologna(){
	var cost = Math.floor(2000*Math.pow(1.1,bologna));
	if (magic >= cost){
		magic -= cost;
		bologna = bologna + 1;
		newCost = Math.floor(2000*Math.pow(1.1,bologna));
		document.getElementById("bologna").innerHTML = bologna;
		document.getElementById("bolognaPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyUnicorn(){
	var cost = Math.floor(10000*Math.pow(1.1,unicorn));
	if (magic >= cost){
		magic -= cost;
		unicorn = unicorn + 1;
		newCost = Math.floor(10000*Math.pow(1.1,unicorn));
		document.getElementById("unicorn").innerHTML = unicorn;
		document.getElementById("unicornPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyLnmonster(){
	var cost = Math.floor(80000*Math.pow(1.1,lnmonster));
	if (magic >= cost){
		magic -= cost;
		lnmonster = lnmonster + 1;
		newCost = Math.floor(80000*Math.pow(1.1,lnmonster));
		document.getElementById("lnmonster").innerHTML = lnmonster;
		document.getElementById("lnmonsterPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyBigfoot(){
	var cost = Math.floor(400000*Math.pow(1.1,bigfoot));
	if (magic >= cost){
		magic -= cost;
		bigfoot = bigfoot + 1;
		newCost = Math.floor(400000*Math.pow(1.1,bigfoot));
		document.getElementById("bigfoot").innerHTML = bigfoot;
		document.getElementById("bigfootPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyNymph(){
	var cost = Math.floor(1666666*Math.pow(1.1,nymph));
	if (magic >= cost){
		magic -= cost;
		nymph = nymph + 1;
		newCost = Math.floor(1666666*Math.pow(1.1,nymph));
		document.getElementById("nymph").innerHTML = nymph;
		document.getElementById("nymphPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyDragon(){
	var cost = Math.floor(1000000*Math.pow(1.1,dragon));
	if (magic >= cost){
		magic -= cost;
		dragon = dragon + 1;
		newCost = Math.floor(10000000*Math.pow(1.1,dragon));
		document.getElementById("dragon").innerHTML = dragon;
		document.getElementById("dragonPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyPhoenix(){
	var cost = Math.floor(55000000*Math.pow(1.1,phoenix));
	if (magic >= cost){
		magic -= cost;
		phoenix = phoenix + 1;
		newCost = Math.floor(55000000*Math.pow(1.1,phoenix));
		document.getElementById("phoenix").innerHTML = phoenix;
		document.getElementById("phoenixPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

function buyDemonteddy(){
	var cost = Math.floor(1000000000*Math.pow(1.1,demonteddy));
	if (magic >= cost){
		magic -= cost;
		demonteddy = demonteddy + 1;
		newCost = Math.floor(1000000000*Math.pow(1.1,demonteddy));
		document.getElementById("demonteddy").innerHTML = demonteddy;
		document.getElementById("demonteddyPrice").innerHTML = rogueDec(newCost);
		document.getElementById("magic").innerHTML = rogueDec(magic);
		update()
	};
};

window.setInterval(function(){
	magicClick(rogueDec(teddy*0.1+slime*0.5+troll*2+cookie*5+bologna*15+unicorn*50+lnmonster*250+bigfoot*1000+nymph*5000+dragon*25000+phoenix*100000+demonteddy*1000000)/25);
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
	document.getElementById("mps").innerHTML = abbreviateNumber(rogueDec(teddy*0.1+slime*0.5+troll*2+cookie*5+bologna*15+unicorn*50+lnmonster*250+bigfoot*1000+nymph*5000+dragon*25000+phoenix*100000+demonteddy*1000000))
	document.getElementById("magic").innerHTML = abbreviateNumber(magic)
	document.getElementById("teddy").innerHTML = teddy
	document.getElementById("slime").innerHTML = slime
	document.getElementById("troll").innerHTML = troll
	document.getElementById("cookie").innerHTML = cookie
	document.getElementById("bologna").innerHTML = bologna
	document.getElementById("unicorn").innerHTML = unicorn
	document.getElementById("lnmonster").innerHTML = lnmonster
	document.getElementById("bigfoot").innerHTML = bigfoot
	document.getElementById("nymph").innerHTML = nymph
	document.getElementById("dragon").innerHTML = dragon
	document.getElementById("phoenix").innerHTML = phoenix
	document.getElementById("demonteddy").innerHTML = demonteddy
	document.getElementById("teddyPrice").innerHTML = Math.floor(10*Math.pow(1.1,teddy))
	document.getElementById("slimePrice").innerHTML = Math.floor(50*Math.pow(1.1,slime))
	document.getElementById("trollPrice").innerHTML = Math.floor(100*Math.pow(1.1,troll))
	document.getElementById("cookiePrice").innerHTML = Math.floor(500*Math.pow(1.1,cookie))
	document.getElementById("bolognaPrice").innerHTML = Math.floor(2000*Math.pow(1.1,bologna))
	document.getElementById("unicornPrice").innerHTML = Math.floor(10000*Math.pow(1.1,unicorn))
	document.getElementById("lnmonsterPrice").innerHTML = Math.floor(80000*Math.pow(1.1,lnmonster))
	document.getElementById("bigfootPrice").innerHTML = Math.floor(400000*Math.pow(1.1,bigfoot))
	document.getElementById("nymphPrice").innerHTML = Math.floor(1666666*Math.pow(1.1,nymph))
	document.getElementById("dragonPrice").innerHTML = Math.floor(10000000*Math.pow(1.1,dragon))
	document.getElementById("phoenixPrice").innerHTML = Math.floor(55000000*Math.pow(1.1,phoenix))
	document.getElementById("demonteddyPrice").innerHTML = Math.floor(1000000000*Math.pow(1.1,demonteddy))}
