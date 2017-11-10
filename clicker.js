var magicAllTime = 0, magic = 0, numberType = 0, clickingMult = 0, clickPower = 1, ind = 0, showGen = 83, magicBefore = 0, magicAfter = 0, counter = 0, counter2 = 0, shards = 0, x = -100, y = -100, clicksAmount = 0, shopbtn1event = null, shopbtn2event = null, shopbtn3event = null, shopbtn4event = null, shopbtn5event = null, shopbtn6event = null, shopbtn7event = null, shopbtn8event = null, shopbtn9event = null, boni = {
    building: {
        bonus: 1,
        price: 1
    },
    prestige: {
        bonus: 1,
        building: false,
        clicking: false
    },
    clicking: {
        bonus: 1,
        auto: 0
    },
    offline: {
        bonus: 1,
        click: 1
    }
}, generators = {
    teddy: {
        amount: 0,
        mult:0.1
    },
    slime: {
        amount: 0,
        mult:0.5
    },
    troll: {
        amount: 0,
        mult: 2
    },
    cookie: {
        amount: 0,
        mult: 5
    },
    bologna: {
        amount: 0,
        mult: 15
    },
    unicorn: {
        amount: 0,
        mult: 50
    },
    lnmonster: {
        amount: 0,
        mult: 250
    },
    bigfoot: {
        amount: 0,
        mult: 1e3
    },
    nymph: {
        amount: 0,
        mult: 5e3
    },
    dragon: {
        amount: 0,
        mult: 25e3
    },
    phoenix: {
        amount: 0,
        mult: 1e5
    },
    demonteddy: {
        amount: 0,
        mult: 1e6
    }
}, upgradeLevels = [ 1, 5, 25, 50, 100, 150, 200, 250, 300 ], multiplier = [ 10, 50, 500, 5e4, 5e6, 5e8, 5e11, 5e14, 5e17 ], prices = [ 10, 50, 100, 500, 2e3, 1e4, 8e4, 4e5, 1666666, 1e7, 55e6, 1e9 ], clickUpgradeAppear = [ 10, 100, 2e3, 2e6, 2e7, 2e8, 2e9, 2e12, 2e15, 2e18, 2e21 ], clickPrices = [ 50, 250, 5e3, 5e4, 5e7, 5e7, 5e8, 5e9, 5e12, 5e15, 5e18, 5e21 ], clickingMultipliers = [0.1,0.5, 5, 50, 500, 5e3, 5e4, 5e5, 5e6 ], gen = [ "teddy", "slime", "troll", "cookie", "bologna", "unicorn", "lnmonster", "bigfoot", "nymph", "dragon", "phoenix", "demonteddy" ], skillTreePrices = [ 1, 5, 10, 10, 10, 1, 5, 10, 10, 10, 1, 5, 10, 10, 1, 5, 10, 10 ];

function tab(n) {
    if (n == 1) {
        document.getElementById("tabpage1").style = "overflow-y: scroll;";
        $("#tabpage2").css("display", "none");
        $("#tabpage3").css("display", "none");
        $("#tabpage4").css("display", "none");
    } else if (n == 2) {
        $("#tabpage1").css("display", "none");
        document.getElementById("tabpage2").style = "overflow-y: scroll;";
        $("#tabpage3").css("display", "none");
        $("#tabpage4").css("display", "none");
    } else if (n == 3) {
        $("#tabpage1").css("display", "none");
        $("#tabpage2").css("display", "none");
        document.getElementById("tabpage3").style = "overflow-y: scroll;";
        $("#tabpage4").css("display", "none");
    } else if (n == 4) {
        $("#tabpage1").css("display", "none");
        $("#tabpage2").css("display", "none");
        $("#tabpage3").css("display", "none");
        document.getElementById("tabpage4").style = "overflow-y: scroll;";
    }
}

function numberTypeChange() {
    if (numberType == 0) {
        ++numberType;
        $("#nmrtype").html("Scientific Notation");
    } else if (numberType == 1) {
        ++numberType;
        $("#nmrtype").html("Full Number");
    } else if (numberType == 2) {
        numberType = 0;
        $("#nmrtype").html("Shortened Notation");
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showNextGen() {
    ++showGen;
    $("#l" + showGen + "anl").css("display", "");
}

function scenery(showOrHide) {
    if (showOrHide == "hide") {
        document.getElementById("body").style = "display: none;";
        document.getElementById("scenery").removeEventListener("click", function() {
            scenery("hide");
        });
        document.getElementById("scenery").addEventListener("click", function() {
            scenery("show");
        });
    } else if (showOrHide == "show") {
        document.getElementById("body").style = "";
        document.getElementById("scenery").removeEventListener("click", function() {
            scenery("show");
        });
        document.getElementById("scenery").addEventListener("click", function() {
            scenery("hide");
        });
    }
}

function description(type, specific) {
    var desc = document.getElementById("description");
    window.onmousemove = function(e) {
        x = e.clientX;
        y = e.clientY;
    };
    desc.style = "left: " + x + "px; top: " + y + "px;";
    if (type == "buildingUpgrade") {
        desc.innerHTML = "Doubles the effectiveness of the " + specific;
    } else if (type == "clickingUpgrade") {
        if (specific >= 0) {
            desc.innerHTML = "Get " + specific + " more magic per click for every upgrade you have.";
        } else {
            desc.innerHTML = "Get twice as much magic per click.";
        }
    }
    if (type == "hide") {
        document.getElementById("description").style = "";
    }
}

function magicClick(n) {
    if (n == "x") {
        ++clicksAmount;
        magicBefore = magic;
        magic += boni.clicking.bonus * clickPower + clickingMult * (generators.teddy.amount + generators.slime.amount + generators.troll.amount + generators.cookie.amount + generators.bologna.amount + generators.unicorn.amount + generators.lnmonster.amount + generators.bigfoot.amount + generators.nymph.amount + generators.dragon.amount + generators.phoenix.amount + generators.demonteddy.amount);
        magicAllTime += clickPower + clickingMult * (generators.teddy.amount + generators.slime.amount + generators.troll.amount + generators.cookie.amount + generators.bologna.amount + generators.unicorn.amount + generators.lnmonster.amount + generators.bigfoot.amount + generators.nymph.amount + generators.dragon.amount + generators.phoenix.amount + generators.demonteddy.amount);
        magicAfter = magic;
        if (magicBefore < clickUpgradeAppear[ind] && magicAfter >= clickUpgradeAppear[ind]) {
            addClickShopBtn(ind);
            ++ind;
        }
    } else {
        magicBefore = magic;
        magic += n;
        magicAllTime += n;
        magicAfter = magic;
        if (magicBefore < clickUpgradeAppear[ind] && magicAfter >= clickUpgradeAppear[ind]) {
            addClickShopBtn(ind);
            ++ind;
        }
    }
    $("#magic").html(abbreviateNumber(rogueDec(magic)));
}

function buy(upgrade) {
    var building = eval("generators." + upgrade + ".amount");
    var n = gen.findIndex(function(N) {
        return N == upgrade;
    });
    var m = prices[n];
    var cost = Math.floor(boni.building.price * m * Math.pow(1.1, building));
    if (building == 0) {
        showNextGen();
    }
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
        $("#" + upgrade + "Price").html(rogueDec(newCost));
        if (upgradeLevels.indexOf(building) >= 0) {
            addShopBtn(upgrade, m, newCost);
        }
        update();
    }
}

function skillTreeBuy(n) {
    if (shards >= skillTreePrices[n]) {
        shards -= skillTreePrices[n];
        if (n == 0) {
            boni.building.bonus +=0.25;
        } else if (n == 1) {
            boni.building.bonus +=0.1;
        } else if (n == 2) {
            boni.building.price -=0.1;
        } else if (n == 3) {
            boni.building.bonus +=0.25;
        } else if (n == 4) {
            window.alert("I literally told you not to, you idiot");
            magic += 1e7;
        } else if (n == 5) {
            boni.prestige.bonus +=0.25;
        } else if (n == 6) {
            boni.prestige.bonus +=0.1;
        } else if (n == 7) {
            boni.building.bonus = true;
        } else if (n == 8) {
            window.alert("I literally told you not to, you idiot");
            magic += 1e7;
        } else if (n == 9) {
            boni.prestige.clicking = true;
        } else if (n == 10) {
            boni.clicking.bonus +=0.25;
        } else if (n == 11) {
            boni.clicking.bonus +=0.1;
        } else if (n == 12) {
            boni.clicking.bonus +=0.25;
        } else if (n == 13) {
            boni.clicking.auto += 1;
        } else if (n == 14) {
            boni.offline.bonus +=0.1;
        } else if (n == 15) {
            boni.offline.bonus +=0.25;
        } else if (n == 16) {
            boni.offline.bonus +=0.25;
        } else if (n == 17) {
            boni.offline.click +=0.25;
        }
    }
}

function addClickShopBtn(index) {
    var btn = document.getElementsByClassName("empty")[0];
    btn.style = "";
    btn.className = "used";
    btn.innerHTML = "Upgrade Clicking <br> Price: " + clickPrices[index];
    btn.addEventListener("mousemove", function() {
        description("clickingUpgrade", clickingMultipliers[index - 3]);
    });
    btn.addEventListener("mouseleave", function() {
        description("hide", null);
    });
    for (i = 1; i < 10; ++i) {
        if (eval("shopbtn" + i + "event") == null) {
            var n = i;
            btn.addEventListener("click", function() {
                clickClickShopBtn(index, n);
            });
            if (i == 1) {
                shopbtn1event = "document.getElementById('shopbtn1').addEventListener('click', function(){clickClickShopBtn(" + index + ",1);}); document.getElementById('shopbtn1').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn1').addEventListener('mouseleave', function() {description('hide', null);});";
            } else if (i == 2) {
                shopbtn2event = "document.getElementById('shopbtn2').addEventListener('click', function(){clickClickShopBtn(" + index + ",2);}); document.getElementById('shopbtn2').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn2').addEventListener('mouseleave', function() {description('hide', null);});";
            } else if (i == 3) {
                shopbtn3event = "document.getElementById('shopbtn3').addEventListener('click', function(){clickClickShopBtn(" + index + ",3);}); document.getElementById('shopbtn3').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn3').addEventListener('mouseleave', function() {description('hide', null);});";
            } else if (i == 4) {
                shopbtn4event = "document.getElementById('shopbtn4').addEventListener('click', function(){clickClickShopBtn(" + index + ",4);}); document.getElementById('shopbtn4').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn4').addEventListener('mouseleave', function() {description('hide', null);});";
            } else if (i == 5) {
                shopbtn5event = "document.getElementById('shopbtn5').addEventListener('click', function(){clickClickShopBtn(" + index + ",5);}); document.getElementById('shopbtn5').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn5').addEventListener('mouseleave', function() {description('hide', null);});";
            } else if (i == 6) {
                shopbtn6event = "document.getElementById('shopbtn6').addEventListener('click', function(){clickClickShopBtn(" + index + ",6);}); document.getElementById('shopbtn6').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn6').addEventListener('mouseleave', function() {description('hide', null);});";
            } else if (i == 7) {
                shopbtn7event = "document.getElementById('shopbtn7').addEventListener('click', function(){clickClickShopBtn(" + index + ",7);}); document.getElementById('shopbtn7').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn7').addEventListener('mouseleave', function() {description('hide', null);});";
            } else if (i == 8) {
                shopbtn8event = "document.getElementById('shopbtn8').addEventListener('click', function(){clickClickShopBtn(" + index + ",8);}); document.getElementById('shopbtn8').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn8').addEventListener('mouseleave', function() {description('hide', null);});";
            } else if (i == 9) {
                shopbtn9event = "document.getElementById('shopbtn9').addEventListener('click', function(){clickClickShopBtn(" + index + ",9);}); document.getElementById('shopbtn9').addEventListener('mousemove', function() {description('clickingUpgrade', clickingMultipliers[" + (index - 3) + "]);}); document.getElementById('shopbtn9').addEventListener('mouseleave', function() {description('hide', null);});";
            }
            i = 10;
        }
    }
}

function clickClickShopBtn(index, number) {
    if (magic >= clickPrices[index]) {
        var oldElement = document.getElementById("shopbtn" + number);
        var newElement = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(newElement, oldElement);
        $("#shopbtn" + number).css("display", "none");
        document.getElementById("shopbtn" + number).className = "empty";
        $("#description").css("display", "none");
        magic -= clickPrices[index];
        if (index == 0 || index == 1 || index == 2) {
            clickPower *= 2;
        } else {
            clickingMult = clickingMultipliers[index - 3];
        }
    }
}

function clickShopBtn(number, price, building) {
    if (magic >= price) {
        var oldElement = document.getElementById("shopbtn" + number);
        var newElement = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(newElement, oldElement);
        $("#shopbtn" + number).css("display", "none");
        document.getElementById("shopbtn" + number).className = "empty";
        magic -= price;
        $("#magic").html(abbreviateNumber(rogueDec(magic)));
        generators[building].mult *= 2;
        eval("shopbtn." + number + ".event = null;");
        $("#description").css("display", "none");
        update();
        save();
        load();
    }
}

function addShopBtn(building, basecost, cost) {
    var btn = document.getElementsByClassName("empty")[0];
    var a = generators[building].amount;
    var number = upgradeLevels.findIndex(function(n) {
        return n == a;
    });
    var price = multiplier[number] * basecost;
    btn.style = "";
    btn.className = "used";
    btn.innerHTML = "Building: " + capitalizeFirstLetter(building) + "<br>Price: " + price;
    btn.addEventListener("mousemove", function() {
        description("buildingUpgrade", building);
    });
    btn.addEventListener("mouseleave", function() {
        description("hide", null);
    });
    for (i = 1; i < 10; ++i) {
        if (eval("shopbtn" + i + "event") == null) {
            var n = i;
            btn.addEventListener("click", function() {
                clickShopBtn(n, price, building);
            });
            if (i == 1) {
                shopbtn1event = "document.getElementById('shopbtn1').addEventListener('click', function(){clickShopBtn(1," + price + ",'" + building + "');}); document.getElementById('shopbtn1').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn1').addEventListener('mouseleave', function(){description('hide', null);});";
            } else if (i == 2) {
                shopbtn2event = "document.getElementById('shopbtn2').addEventListener('click', function(){clickShopBtn(2," + price + ",'" + building + "');}); document.getElementById('shopbtn2').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn2').addEventListener('mouseleave', function(){description('hide', null);});";
            } else if (i == 3) {
                shopbtn3event = "document.getElementById('shopbtn3').addEventListener('click', function(){clickShopBtn(3," + price + ",'" + building + "');}); document.getElementById('shopbtn3').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn3').addEventListener('mouseleave', function(){description('hide', null);});";
            } else if (i == 4) {
                shopbtn4event = "document.getElementById('shopbtn4').addEventListener('click', function(){clickShopBtn(4," + price + ",'" + building + "');}); document.getElementById('shopbtn4').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn4').addEventListener('mouseleave', function(){description('hide', null);});";
            } else if (i == 5) {
                shopbtn5event = "document.getElementById('shopbtn5').addEventListener('click', function(){clickShopBtn(5," + price + ",'" + building + "');}); document.getElementById('shopbtn5').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn5').addEventListener('mouseleave', function(){description('hide', null);});";
            } else if (i == 6) {
                shopbtn6event = "document.getElementById('shopbtn6').addEventListener('click', function(){clickShopBtn(6," + price + ",'" + building + "');}); document.getElementById('shopbtn6').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn6').addEventListener('mouseleave', function(){description('hide', null);});";
            } else if (i == 7) {
                shopbtn7event = "document.getElementById('shopbtn7').addEventListener('click', function(){clickShopBtn(7," + price + ",'" + building + "');}); document.getElementById('shopbtn7').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn7').addEventListener('mouseleave', function(){description('hide', null);});";
            } else if (i == 8) {
                shopbtn8event = "document.getElementById('shopbtn8').addEventListener('click', function(){clickShopBtn(8," + price + ",'" + building + "');}); document.getElementById('shopbtn8').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn8').addEventListener('mouseleave', function(){description('hide', null);});";
            } else if (i == 9) {
                shopbtn9event = "document.getElementById('shopbtn9').addEventListener('click', function(){clickShopBtn(9," + price + ",'" + building + "');}); document.getElementById('shopbtn9').addEventListener('mousemove', function(){description('buildingUpgrade', '" + building + "');}); document.getElementById('shopbtn9').addEventListener('mouseleave', function(){description('hide', null);});";
            }
            i = 10;
        }
    }
}

function save() {
    var save = {
        shopbtn1: $("#shopbtn1").html(),
        shopbtn1style: document.getElementById("shopbtn1").style,
        shopbtn1class: document.getElementById("shopbtn1").className,
        shopbtn1event: shopbtn1event,
        shopbtn2: $("#shopbtn2").html(),
        shopbtn2style: document.getElementById("shopbtn2").style,
        shopbtn2class: document.getElementById("shopbtn2").className,
        shopbtn2event: shopbtn2event,
        shopbtn3: $("#shopbtn3").html(),
        shopbtn3style: document.getElementById("shopbtn3").style,
        shopbtn3class: document.getElementById("shopbtn3").className,
        shopbtn3event: shopbtn3event,
        shopbtn4: $("#shopbtn4").html(),
        shopbtn4style: document.getElementById("shopbtn4").style,
        shopbtn4class: document.getElementById("shopbtn4").className,
        shopbtn4event: shopbtn4event,
        shopbtn5: $("#shopbtn5").html(),
        shopbtn5style: document.getElementById("shopbtn5").style,
        shopbtn5class: document.getElementById("shopbtn5").className,
        shopbtn5event: shopbtn5event,
        shopbtn6: $("#shopbtn6").html(),
        shopbtn6style: document.getElementById("shopbtn6").style,
        shopbtn6class: document.getElementById("shopbtn6").className,
        shopbtn6event: shopbtn6event,
        shopbtn7: $("#shopbtn7").html(),
        shopbtn7style: document.getElementById("shopbtn7").style,
        shopbtn7class: document.getElementById("shopbtn7").className,
        shopbtn7event: shopbtn7event,
        shopbtn8: $("#shopbtn8").html(),
        shopbtn8style: document.getElementById("shopbtn8").style,
        shopbtn8class: document.getElementById("shopbtn8").className,
        shopbtn8event: shopbtn8event,
        shopbtn9: $("#shopbtn9").html(),
        shopbtn9style: document.getElementById("shopbtn9").style,
        shopbtn9class: document.getElementById("shopbtn9").className,
        shopbtn9event: shopbtn9event,
        magic: magic,
        magicAllTime: magicAllTime,
        clickingMult: clickingMult,
        ind: ind,
        showGen: showGen,
        clickPower: clickPower,
        shards: shards,
        numberType: numberType,
        boni: boni,
        generators: generators
    };
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    document.getElementById("scenery").addEventListener("click", function() {
        scenery("hide");
    });
    if (savegame.shopbtn1class == "used") {
        $("#shopbtn1").html(savegame.shopbtn1);
        document.getElementById("shopbtn1").style = savegame.shopbtn1style;
        document.getElementById("shopbtn1").className = savegame.shopbtn1class;
        eval(savegame.shopbtn1event);
        shopbtn1event = savegame.shopbtn1event;
    }
    if (savegame.shopbtn2class == "used") {
        $("#shopbtn2").html(savegame.shopbtn2);
        document.getElementById("shopbtn2").style = savegame.shopbtn2style;
        document.getElementById("shopbtn2").className = savegame.shopbtn2class;
        eval(savegame.shopbtn2event);
        shopbtn2event = savegame.shopbtn2event;
    }
    if (savegame.shopbtn3class == "used") {
        $("#shopbtn3").html(savegame.shopbtn3);
        document.getElementById("shopbtn3").style = savegame.shopbtn3style;
        document.getElementById("shopbtn3").className = savegame.shopbtn3class;
        eval(savegame.shopbtn3event);
        shopbtn3event = savegame.shopbtn3event;
    }
    if (savegame.shopbtn4 == "used") {
        $("#shopbtn4").html(savegame.shopbtn4);
        document.getElementById("shopbtn4").style = savegame.shopbtn4style;
        document.getElementById("shopbtn4").className = savegame.shopbtn4class;
        eval(savegame.shopbtn4event);
        shopbtn4event = savegame.shopbtn4event;
    }
    if (savegame.shopbtn5 == "used") {
        $("#shopbtn5").html(savegame.shopbtn5);
        document.getElementById("shopbtn5").style = savegame.shopbtn5style;
        document.getElementById("shopbtn5").className = savegame.shopbtn5class;
        eval(savegame.shopbtn5event);
        shopbtn5event = savegame.shopbtn5event;
    }
    if (savegame.shopbtn6 == "used") {
        $("#shopbtn6").html(savegame.shopbtn6);
        document.getElementById("shopbtn6").style = savegame.shopbtn6style;
        document.getElementById("shopbtn6").className = savegame.shopbtn6class;
        eval(savegame.shopbtn6event);
        shopbtn6event = savegame.shopbtn6event;
    }
    if (savegame.shopbtn7 == "used") {
        $("#shopbtn7").html(savegame.shopbtn7);
        document.getElementById("shopbtn7").style = savegame.shopbtn7style;
        document.getElementById("shopbtn7").className = savegame.shopbtn7class;
        eval(savegame.shopbtn7event);
        shopbtn7event = savegame.shopbtn7event;
    }
    if (savegame.shopbtn8 == "used") {
        $("#shopbtn8").html(savegame.shopbtn8);
        document.getElementById("shopbtn8").style = savegame.shopbtn8style;
        document.getElementById("shopbtn8").className = savegame.shopbtn8class;
        eval(savegame.shopbtn8event);
        shopbtn8event = savegame.shopbtn8event;
    }
    if (savegame.shopbtn9 == "used") {
        $("#shopbtn9").html(savegame.shopbtn9);
        document.getElementById("shopbtn9").style = savegame.shopbtn9style;
        document.getElementById("shopbtn9").className = savegame.shopbtn9class;
        eval(savegame.shopbtn9event);
        shopbtn9event = savegame.shopbtn9event;
    }
    if (typeof savegame.magic !== "undefined") {
        magic = savegame.magic;
        magicAllTime = savegame.magicAllTime;
        clickingMult = savegame.clickingMult;
        ind = savegame.ind;
        showGen = savegame.showGen;
        clickPower = savegame.clickPower;
        shards = savegame.shards;
        boni = savegame.boni;
        generators = savegame.generators;
        if (savegame.shards >= 1) {
            document.getElementById("shards").style = "left: 5%; bottom: 10%";
            document.getElementById("shards1").style = "left: 50%; bottom: 10%";
        }
        for (i = 84; i <= showGen; i++) {
            $("#l" + i + "anl").css("display", "");
        }
    }
    if (typeof Date.parse(localStorage.oldDate) !== "object") {
        var newDate = new Date();
        var diff = (newDate - Date.parse(localStorage.oldDate)) / 1e3;
        if (diff >= 60 && diff <= 1814400) {
            var s = diff * boni.offline.bonus * boni.building.bonus * generators.teddy.amount * generators.teddy.mult + generators.slime.amount * generators.slime.mult + generators.troll.amount * generators.troll.mult + generators.cookie.amount * generators.cookie.mult + generators.bologna.amount * generators.bologna.mult + generators.unicorn.amount * generators.unicorn.mult + generators.lnmonster.amount * generators.lnmonster.mult + generators.bigfoot.amount * generators.bigfoot.mult + generators.nymph.amount * generators.nymph.mult + generators.dragon.amount * generators.dragon.mult + generators.phoenix.amount * generators.phoenix.mult + generators.demonteddy.amount * generators.demonteddy.mult;
            if (boni.offline.click > 1) {
                s += magicClick(diff * boni.offline.bonus);
            }
            window.alert("You received\n" + abbreviateNumber(rogueDec(s)) + "\nmagic while you were away.");
            for (i = 100; i > 0; --i) {
                magicClick(s / 100);
            }
        } else if (diff > 2592e3) {
            window.alert("Y U no play my game");
        }
        if (savegame.numberType > 0) {
            abbreviateNumber(savegame.numberType);
        }
        update();
    }
}

function unload() {
    var oldDate = new Date();
    localStorage.oldDate = oldDate;
}

function reset(type) {
    if (type == "hard") {
        localStorage.removeItem("save");
        localStorage.removeItem("date");
        $("#shards").css("display", "none");
        $("#shards1").css("display", "none");
        for (i = 0; i < 18; i++) {
            document.getElementsByClassName("skilltreebtn")[i].style.animationName = "";
        }
        $(".skilltreebtn").css("background-color", "#C4C4C4FF");
        $(".main").css("background-color", "white");
        shards = 0;
        magicAllTime = 0;
        boni = {
            building: {
                bonus: 1,
                price: 1
            },
            prestige: {
                bonus: 1,
                building: false,
                clicking: false
            },
            clicking: {
                bonus: 1,
                auto: 0
            },
            offline: {
                bonus: 1,
                click: 1
            }
        };
    }
    magic = 0;
    ind = 0;
    showGen = 83;
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
    generators.teddy.mult =0.1;
    generators.slime.mult =0.5;
    generators.troll.mult = 2;
    generators.cookie.mult = 5;
    generators.bologna.mult = 15;
    generators.unicorn.mult = 50;
    generators.lnmonster.mult = 250;
    generators.bigfoot.mult = 1e3;
    generators.nymph.mult = 5e3;
    generators.dragon.mult = 25e3;
    generators.phoenix.mult = 1e5;
    generators.demonteddy.mult = 1e6;
    for (i = 1; i < 10; ++i) {
        var oldElement = document.getElementById("shopbtn" + i);
        var newElement = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(newElement, oldElement);
        $("#shopbtn" + i).html(i);
        document.getElementById("shopbtn" + i).className = "empty";
        $("#shopbtn" + i).css("display", "none");
    }
    for (i = 84; i <= 92; i++) {
        $("#l" + i + "anl").css("display", "none");
    }
}

function prestige() {
    var prestige = Math.floor(boni.prestige.bonus * (magic / 1e6));
    if (prestige >= 1) {
        if (window.confirm("Are you sure you want to prestige?\nYou'll gain " + abbreviateNumber(prestige) + " magic shards.")) {
            shards += prestige;
            document.getElementById("shards").style = "left: 5%; bottom: 10%;";
            document.getElementById("shards1").style = "left: 50%; bottom: 10%";
            document.getElementById("shards1").innerHTML = abbreviateNumber(shards);
            reset("soft");
        }
    } else {
        window.alert("You can't prestige yet.");
    }
}

function update() {
    $("#mps").html(abbreviateNumber(rogueDec(boni.building.bonus * generators.teddy.amount * generators.teddy.mult + generators.slime.amount * generators.slime.mult + generators.troll.amount * generators.troll.mult + generators.cookie.amount * generators.cookie.mult + generators.bologna.amount * generators.bologna.mult + generators.unicorn.amount * generators.unicorn.mult + generators.lnmonster.amount * generators.lnmonster.mult + generators.bigfoot.amount * generators.bigfoot.mult + generators.nymph.amount * generators.nymph.mult + generators.dragon.amount * generators.dragon.mult + generators.phoenix.amount * generators.phoenix.mult + generators.demonteddy.amount * generators.demonteddy.mult)));
    $("#magic").html(abbreviateNumber(rogueDec(magic)));
    $("#teddy").html(generators.teddy.amount);
    $("#slime").html(generators.slime.amount);
    $("#troll").html(generators.troll.amount);
    $("#cookie").html(generators.cookie.amount);
    $("#bologna").html(generators.bologna.amount);
    $("#unicorn").html(generators.unicorn.amount);
    $("#lnmonster").html(generators.lnmonster.amount);
    $("#bigfoot").html(generators.bigfoot.amount);
    $("#nymph").html(generators.nymph.amount);
    $("#dragon").html(generators.dragon.amount);
    $("#phoenix").html(generators.phoenix.amount);
    $("#demonteddy").html(generators.demonteddy.amount);
    $("#teddyPrice").html(abbreviateNumber(Math.floor(10 * Math.pow(1.1, generators.teddy.amount))));
    $("#slimePrice").html(abbreviateNumber(Math.floor(50 * Math.pow(1.1, generators.slime.amount))));
    $("#trollPrice").html(abbreviateNumber(Math.floor(100 * Math.pow(1.1, generators.troll.amount))));
    $("#cookiePrice").html(abbreviateNumber(Math.floor(500 * Math.pow(1.1, generators.cookie.amount))));
    $("#bolognaPrice").html(abbreviateNumber(Math.floor(2e3 * Math.pow(1.1, generators.bologna.amount))));
    $("#unicornPrice").html(abbreviateNumber(Math.floor(1e4 * Math.pow(1.1, generators.unicorn.amount))));
    $("#lnmonsterPrice").html(abbreviateNumber(Math.floor(8e4 * Math.pow(1.1, generators.lnmonster.amount))));
    $("#bigfootPrice").html(abbreviateNumber(Math.floor(4e5 * Math.pow(1.1, generators.bigfoot.amount))));
    $("#nymphPrice").html(abbreviateNumber(Math.floor(1666666 * Math.pow(1.1, generators.nymph.amount))));
    $("#dragonPrice").html(abbreviateNumber(Math.floor(1e7 * Math.pow(1.1, generators.dragon.amount))));
    $("#phoenixPrice").html(abbreviateNumber(Math.floor(55e6 * Math.pow(1.1, generators.phoenix.amount))));
    $("#demonteddyPrice").html(abbreviateNumber(Math.floor(1e9 * Math.pow(1.1, generators.demonteddy.amount))));
    $("#shards1").html(abbreviateNumber(shards));
    $("#MAT").html("Magic All Time: " + abbreviateNumber(rogueDec(magicAllTime)));
    $("#MPS").html("Magic Per Second: " + abbreviateNumber(rogueDec(boni.prestige.bonus * generators.teddy.amount * generators.teddy.mult + generators.slime.amount * generators.slime.mult + generators.troll.amount * generators.troll.mult + generators.cookie.amount * generators.cookie.mult + generators.bologna.amount * generators.bologna.mult + generators.unicorn.amount * generators.unicorn.mult + generators.lnmonster.amount * generators.lnmonster.mult + generators.bigfoot.amount * generators.bigfoot.mult + generators.nymph.amount * generators.nymph.mult + generators.dragon.amount * generators.dragon.mult + generators.phoenix.amount * generators.phoenix.mult + generators.demonteddy.amount * generators.demonteddy.mult)));
    $("#MPC").html("Magic Per Click: " + (clickPower + clickingMult * (generators.teddy.amount + generators.slime.amount + generators.troll.amount + generators.cookie.amount + generators.bologna.amount + generators.unicorn.amount + generators.lnmonster.amount + generators.bigfoot.amount + generators.nymph.amount + generators.dragon.amount + generators.phoenix.amount + generators.demonteddy.amount)));
    for (i = 0; i < 12; ++i) {
        if (Math.floor(prices[i] * Math.pow(1.1, generators[gen[i]].amount)) > magic) {
            document.getElementsByClassName("buildingbtn")[i].style.backgroundColor = "#AFAFAFFF";
        } else {
            document.getElementsByClassName("buildingbtn")[i].style.backgroundColor = "white";
        }
    }
    for (i = 0; i < 18; ++i) {
        if (skillTreePrices[i] > shards) {
            document.getElementsByClassName("skilltreebtn")[i].style.backgroundColor = "#AFAFAFFF";
            document.getElementsByClassName("skilltreebtn")[i].style.animationName = "";
        } else {
            document.getElementsByClassName("skilltreebtn")[i].style.animationName = "turnYellow";
            document.getElementsByClassName("skilltreebtn")[i].style.animationDuration = "1s";
            document.getElementsByClassName("skilltreebtn")[i].style.animationIterationCount = "infinite";
        }
    }
}

function rogueDec(n) {
    if (n > 1e3) {
        n = Math.round(n);
    } else {
        n = Math.round(n * 10) / 10;
    }
    return n;
}

function abbreviateNumber(value) {
    if (numberType == 0) {
        var newValue = value;
        if (value >= 1e3) {
            var suffixes = [ "", "k", "m", "b", "t", "q", "Q", "s", "S" ];
            var suffixNum = Math.floor(("" + value).length / 3);
            var shortValue = "";
            for (var precision = 3; precision >= 3; precision--) {
                shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1e3, suffixNum) : value).toPrecision(precision));
                var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
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

window.setInterval(function() {
    ++counter;
    if (counter % (10 / boni.clicking.auto) == 0 && boni.clicking.auto > 0) {
        console.log("lol");
        counter2 = 0;
        magicClick("x");
    }
    if (counter == 100) {
        counter = 0;
        save();
    }
    magicClick(rogueDec(boni.building.bonus * generators.teddy.amount * generators.teddy.mult + generators.slime.amount * generators.slime.mult + generators.troll.amount * generators.troll.mult + generators.cookie.amount * generators.cookie.mult + generators.bologna.amount * generators.bologna.mult + generators.unicorn.amount * generators.unicorn.mult + generators.lnmonster.amount * generators.lnmonster.mult + generators.bigfoot.amount * generators.bigfoot.mult + generators.nymph.amount * generators.nymph.mult + generators.dragon.amount * generators.dragon.mult + generators.phoenix.amount * generators.phoenix.mult + generators.demonteddy.amount * generators.demonteddy.mult) / 10);
    update();
}, 100);
