var magicAllTime=0,magic=0,numberType=0,clickingMult=0,clickPower=1,ind=0,showGen=83,magicBefore=0,magicAfter=0,prestigeBonus=1,lastPrestige=0,x=0,y=0,shopbtn1event=null,shopbtn2event=null,shopbtn3event=null,shopbtn4event=null,shopbtn5event=null,shopbtn6event=null,shopbtn7event=null,shopbtn8event=null,shopbtn9event=null,generators={"teddy":{amount:0,mult:0.1},"slime":{amount:0,mult:0.5},"troll":{amount:0,mult:2},"cookie":{amount:0,mult:5},"bologna":{amount:0,mult:15},"unicorn":{amount:0,mult:50},"lnmonster":{amount:0,mult:250},"bigfoot":{amount:0,mult:1000},"nymph":{amount:0,mult:5000},"dragon":{amount:0,mult:25000},"phoenix":{amount:0,mult:100000},"demonteddy":{amount:0,mult:1000000}},upgradeLevels=[1,5,25,50,100,150,200,250,300],multiplier=[10,50,500,50000,5000000,500000000,500000000000,500000000000000,500000000000000000],prices=[10,50,100,500,2000,10000,80000,400000,1666666,10000000,55000000,1000000000],clickUpgradeAppear=[10,100,2000,2000000,20000000,200000000,2000000000,2000000000000,2000000000000000,2000000000000000000,2000000000000000000000],clickPrices=[50,250,5000,50000,50000000,50000000,500000000,5000000000,5000000000000,5000000000000000,5000000000000000000,5000000000000000000000],clickingMultipliers=[0.1,0.5,5,50,500,5000,50000,500000,5000000],gen=["teddy","slime","troll","cookie","bologna","unicorn","lnmonster","bigfoot","nymph","dragon","phoenix","demonteddy"];function tab(n){if(n==1){document.getElementById("tabpage1").style="height: 75%; width: 58%; overflow-y: scroll; border: 3px solid white";$("#tabpage2").css("display","none;");$("#tabpage3").css("display","none;");$("#tabpage4").css("display","none;");}else if(n==2){$("#tabpage1").css("display","none;");document.getElementById("tabpage2").style="height: 75%; width: 58%; overflow-y: auto; border: 3px solid white;";$("#tabpage3").css("display","none");$("#tabpage4").css("display","none");}else if(n==3){$("#tabpage1").css("display","none");$("#tabpage2").css("display","none");document.getElementById("tabpage3").style="height: 75%; width: 58%; overflow-y: auto; border: 3px solid white;";$("#tabpage4").css("display","none");}else if(n==4){$("#tabpage1").css("display","none");$("#tabpage2").css("display","none");$("#tabpage3").css("display","none");document.getElementById("tabpage4").style="height: 75%; width: 58%; overflow-y: auto; border: 3px solid white;";}}
function numberTypeChange(){if(numberType==0){++numberType;$("#nmrtype").html("Scientific Notation");}else if(numberType==1){++numberType;$("#nmrtype").html("Full Number");}else if(numberType==2){numberType=0;$("#nmrtype").html("Shortened Notation");}}
function capitalizeFirstLetter(string){return string.charAt(0).toUpperCase()+string.slice(1);}
function showNextGen(){++showGen;$("#l"+showGen+"anl").css("display","");}
function scenery(showOrHide){if(showOrHide=="hide"){$("#tabpage1").css("display","none");$("#tabpage3").css("display","none");$("#tabpage4").css("display","none");$("#button").css("display","none");$("#description").css("display","none");$("#scenery").off('click',function(){scenery('hide');});$("#scenery").on('click',function(){scenery('show');});}else if(showOrHide=="show"){document.getElementById("tabpage1").style="height: 75%; width: 58%; overflow-y: scroll; overflow-x: hidden; border: 3px solid white;"
document.getElementById("button").style="background: url(Sprites/rabbit.png); background-size: cover; width: 35%; height: 70%; position: fixed; left: 60%; bottom: 5%; font-size: 35; color: white;";$("#scenery").off('click',function(){scenery('show');});$("#scenery").on('click',function(){scenery('hide');});}}
function description(type,specific){var desc=document.getElementById("description");window.onmousemove=function(e){x=e.clientX
y=e.clientY}
desc.style="left: "+x+"px; top: "+y+"px;"
if(type=="buildingUpgrade"){desc.innerHTML="Doubles the effectiveness of the "+specific}else if(type=="clickingUpgrade"){if(specific>=0){desc.innerHTML="Get "+specific+" more magic per click for every upgrade you have.";}else{desc.innerHTML="Get twice as much magic per click.";}}
if(type=="hide"){document.getElementById("description").style="";}}
function magicClick(n){if(n=='x'){magicBefore=magic;magic+=clickPower+(clickingMult*(generators.teddy.amount+generators.slime.amount+generators.troll.amount+generators.cookie.amount+generators.bologna.amount+generators.unicorn.amount+generators.lnmonster.amount+generators.bigfoot.amount+generators.nymph.amount+generators.dragon.amount+generators.phoenix.amount+generators.demonteddy.amount));magicAllTime+=clickPower+(clickingMult*(generators.teddy.amount+generators.slime.amount+generators.troll.amount+generators.cookie.amount+generators.bologna.amount+generators.unicorn.amount+generators.lnmonster.amount+generators.bigfoot.amount+generators.nymph.amount+generators.dragon.amount+generators.phoenix.amount+generators.demonteddy.amount));magicAfter=magic;if((magicBefore<clickUpgradeAppear[ind])&&(magicAfter>=clickUpgradeAppear[ind])){addClickShopBtn(ind);++ind;}}else{magicBefore=magic;magic+=n;magicAllTime+=n
magicAfter=magic;if((magicBefore<clickUpgradeAppear[ind])&&(magicAfter>=clickUpgradeAppear[ind])){addClickShopBtn(ind);++ind;}}
$("#magic").html(abbreviateNumber(rogueDec(magic)));}
function buy(upgrade){var building=eval("generators."+upgrade+".amount");var n=gen.findIndex(function(N){return N==upgrade;});var m=prices[n];var cost=Math.floor(m*Math.pow(1.1,building));if(building==0){showNextGen();}
if(magic>=cost){magic-=rogueDec(cost);++building;if(upgrade=="teddy"){++generators.teddy.amount;}else if(upgrade=="slime"){++generators.slime.amount;}else if(upgrade=="troll"){++generators.troll.amount;}else if(upgrade=="cookie"){++generators.cookie.amount;}else if(upgrade=="bologna"){++generators.bologna.amount;}else if(upgrade=="unicorn"){++generators.unicorn.amount;}else if(upgrade=="lnmonster"){++generators.lnmonster.amount;}else if(upgrade=="bigfoot"){++generators.bigfoot.amount;}else if(upgrade=="nymph"){++generators.nymph.amount;}else if(upgrade=="dragon"){++generators.dragon.amount;}else if(upgrade=="phoenix"){++generators.phoenix.amount;}else if(upgrade=="demonteddy"){++generators.demonteddy.amount;}
newCost=Math.floor(m*Math.pow(1.1,building));$('#'+upgrade+"Price").html(rogueDec(newCost));if(upgradeLevels.indexOf(building)>=0){addShopBtn(upgrade,m,newCost);}
update();}}
function addClickShopBtn(index){var number=0
if($("#shopbtn1").hasClass('empty')){number=1
shopbtn1event="$('#shopbtn1').on('click', function(){clickClickShopBtn("+index+",1);})";}else if($("#shopbtn2").hasClass('empty')){number=2
shopbtn2event="$('#shopbtn2').on('click', function(){clickClickShopBtn("+index+",2);})";}else if($("#shopbtn3").hasClass('empty')){number=3
shopbtn3event="$('#shopbtn3').on('click', function(){clickClickShopBtn("+index+",3);})";}else if($("#shopbtn4").hasClass('empty')){number=4
shopbtn4event="$('#shopbtn4').on('click', function(){clickClickShopBtn("+index+",4);})";}else if($("#shopbtn5").hasClass('empty')){number=5
shopbtn5event="$('#shopbtn5').on('click', function(){clickClickShopBtn("+index+",5);})";}else if($("#shopbtn6").hasClass('empty')){number=6
shopbtn6event="$('#shopbtn6').on('click', function(){clickClickShopBtn("+index+",6);})";}else if($("#shopbtn7").hasClass('empty')){number=7
shopbtn7event="$('#shopbtn7').on('click', function(){clickClickShopBtn("+index+",7);})";}else if($("#shopbtn8").hasClass('empty')){number=8
shopbtn8event="$('#shopbtn8').on('click', function(){clickClickShopBtn("+index+",8);})";}else if($("#shopbtn9").hasClass('empty')){number=9
shopbtn9event="$('#shopbtn9').on('click', function(){clickClickShopBtn("+index+",9);})";}
$("#shopbtn"+number).html("Upgrade Clicking <br> Price: "+clickPrices[index]);document.getElementById("shopbtn"+number).className="used";$("#shopbtn"+number).css('display','');if(index>=3){$("#shopbtn"+number).on('mousemove',function(){description("clickingUpgrade",clickingMultipliers[index-3]);});}else{$("#shopbtn"+number).on('mousemove',function(){description("clickingUpgrade");});}
$("#shopbtn"+number).on('mouseleave',function(){description("hide",null);});$("#shopbtn"+number).on('click',function(){clickClickShopBtn(index,number);});}
function clickClickShopBtn(index,number){if(magic>=clickPrices[index]){var oldElement=document.getElementById("shopbtn"+number);var newElement=oldElement.cloneNode(true);oldElement.parentNode.replaceChild(newElement,oldElement);$("#shopbtn"+number).css("display","none");document.getElementById("shopbtn"+number).className="empty";$("#description").css("display","none");magic-=clickPrices[index];if((index==0)||(index==1)||(index==2)){clickPower*=2;}else{clickingMult=clickingMultipliers[index-3]}}}
function clickShopBtn(number,price,building){if(magic>=price){console.log(number)
var oldElement=document.getElementById("shopbtn"+number);var newElement=oldElement.cloneNode(true);oldElement.parentNode.replaceChild(newElement,oldElement);$("#shopbtn"+number).css("display","none");document.getElementById("shopbtn"+number).className="empty";magic-=price;$("#magic").html(abbreviateNumber(rogueDec(magic)));eval("generators."+building+".mult *= 2;");eval("shopbtn"+number+"event = null;");$("#description").css("display","none;");update();save();}}
function addShopBtn(building,basecost,cost){var btn=document.getElementsByClassName('empty')[0];var a=eval("generators."+building+".amount;");var number=upgradeLevels.findIndex(function(n){return n==a;});var price=multiplier[number]*basecost;btn.style="";btn.className="used";btn.innerHTML="Building: "+capitalizeFirstLetter(building)+"<br>Price: "+price;btn.addEventListener('mousemove',function(){description('buildingUpgrade',building);});btn.addEventListener('mouseleave',function(){description('hide',null);});for(var i=1;i<10;++i){if(eval("shopbtn"+i+"event")==null){let n=i
btn.addEventListener('click',function(){clickShopBtn(n,price,building);});if(i==1){shopbtn1event="$('#shopbtn1').on('click', function(){clickShopBtn(1,"+price+","+building+");}); $('#shopbtn1').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn1').on('mouseleave', function(){description('hide', null);});";}else if(i==2){shopbtn2event="$('#shopbtn2').on('click', function(){clickShopBtn(2,"+price+","+building+");}); $('#shopbtn2').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn2').on('mouseleave', function(){description('hide', null);});";}else if(i==3){shopbtn3event="$('#shopbtn3').on('click', function(){clickShopBtn(3,"+price+","+building+");}); $('#shopbtn3').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn3').on('mouseleave', function(){description('hide', null);});";}else if(i==4){shopbtn4event="$('#shopbtn4').on('click', function(){clickShopBtn(4,"+price+","+building+");}); $('#shopbtn4').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn4').on('mouseleave', function(){description('hide', null);});";}else if(i==5){shopbtn5event="$('#shopbtn5').on('click', function(){clickShopBtn(5,"+price+","+building+");}); $('#shopbtn5').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn5').on('mouseleave', function(){description('hide', null);});";}else if(i==6){shopbtn6event="$('#shopbtn6').on('click', function(){clickShopBtn(6,"+price+","+building+");}); $('#shopbtn6').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn6').on('mouseleave', function(){description('hide', null);});";}else if(i==7){shopbtn7event="$('#shopbtn7').on('click', function(){clickShopBtn(7,"+price+","+building+");}); $('#shopbtn7').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn7').on('mouseleave', function(){description('hide', null);});";}else if(i==8){shopbtn8event="$('#shopbtn8').on('click', function(){clickShopBtn(8,"+price+","+building+");}); $('#shopbtn8').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn8').on('mouseleave', function(){description('hide', null);});";}else if(i==9){shopbtn9event="$('#shopbtn9').on('click', function(){clickShopBtn(9,"+price+","+building+");}); $('#shopbtn9').on('mousemove', function(){description('buildingUpgrade', "+building+");}); $('#shopbtn9').on('mouseleave', function(){description('hide', null);});";}
i=10;}}}
function save(){var save={shopbtn1:$("#shopbtn1").html(),shopbtn1style:document.getElementById("shopbtn1").style,shopbtn1class:document.getElementById("shopbtn1").className,shopbtn1event:shopbtn1event,shopbtn2:$("#shopbtn2").html(),shopbtn2style:document.getElementById("shopbtn2").style,shopbtn2class:document.getElementById("shopbtn2").className,shopbtn2event:shopbtn2event,shopbtn3:$("#shopbtn3").html(),shopbtn3style:document.getElementById("shopbtn3").style,shopbtn3class:document.getElementById("shopbtn3").className,shopbtn3event:shopbtn3event,shopbtn4:$("#shopbtn4").html(),shopbtn4style:document.getElementById("shopbtn4").style,shopbtn4class:document.getElementById("shopbtn4").className,shopbtn4event:shopbtn4event,shopbtn5:$("#shopbtn5").html(),shopbtn5style:document.getElementById("shopbtn5").style,shopbtn5class:document.getElementById("shopbtn5").className,shopbtn5event:shopbtn5event,shopbtn6:$("#shopbtn6").html(),shopbtn6style:document.getElementById("shopbtn6").style,shopbtn6class:document.getElementById("shopbtn6").className,shopbtn6event:shopbtn6event,shopbtn7:$("#shopbtn7").html(),shopbtn7style:document.getElementById("shopbtn7").style,shopbtn7class:document.getElementById("shopbtn7").className,shopbtn7event:shopbtn7event,shopbtn8:$("#shopbtn8").html(),shopbtn8style:document.getElementById("shopbtn8").style,shopbtn8class:document.getElementById("shopbtn8").className,shopbtn8event:shopbtn8event,shopbtn9:$("#shopbtn9").html(),shopbtn9style:document.getElementById("shopbtn9").style,shopbtn9class:document.getElementById("shopbtn9").className,shopbtn9event:shopbtn9event,magic:magic,clickingMult:clickingMult,ind:ind,showGen:showGen,clickPower:clickPower,teddy:generators.teddy.amount,slime:generators.slime.amount,troll:generators.troll.amount,cookie:generators.cookie.amount,bologna:generators.bologna.amount,unicorn:generators.unicorn.amount,lnmonster:generators.lnmonster.amount,bigfoot:generators.bigfoot.amount,nymph:generators.nymph.amount,dragon:generators.dragon.amount,phoenix:generators.phoenix.amount,demonteddy:generators.demonteddy.amount,teddymult:generators.teddy.mult,slimemult:generators.slime.mult,trollmult:generators.troll.mult,cookiemult:generators.cookie.mult,bolognamult:generators.bologna.mult,unicornmult:generators.unicorn.mult,lnmonstermult:generators.lnmonster.mult,bigfootmult:generators.bigfoot.mult,nymphmult:generators.nymph.mult,dragonmult:generators.dragon.mult,phoenixmult:generators.phoenix.mult,demonteddymult:generators.demonteddy.mult};localStorage.setItem("save",JSON.stringify(save));}
function load(){var savegame=JSON.parse(localStorage.getItem("save"));document.getElementById("scenery").addEventListener('click',function(){scenery('hide');});if(savegame.shopbtn1class=="used"){$("#shopbtn1").html(savegame.shopbtn1);document.getElementById("shopbtn1").style=savegame.shopbtn1style;document.getElementById("shopbtn1").className=savegame.shopbtn1class;eval(savegame.shopbtn1event);shopbtn1event=savegame.shopbtn1event}
if(savegame.shopbtn2class=="used"){$("#shopbtn2").html(savegame.shopbtn2);document.getElementById("shopbtn2").style=savegame.shopbtn2style;document.getElementById("shopbtn2").className=savegame.shopbtn2class;eval(savegame.shopbtn2event);shopbtn2event=savegame.shopbtn2event}
if(savegame.shopbtn3class=="used"){$("#shopbtn3").html(savegame.shopbtn3);document.getElementById("shopbtn3").style=savegame.shopbtn3style;document.getElementById("shopbtn3").className=savegame.shopbtn3class;eval(savegame.shopbtn3event);shopbtn3event=savegame.shopbtn3event}
if(savegame.shopbtn4=="used"){$("#shopbtn4").html(savegame.shopbtn4);document.getElementById("shopbtn4").style=savegame.shopbtn4style;document.getElementById("shopbtn4").className=savegame.shopbtn4class;eval(savegame.shopbtn4event);shopbtn4event=savegame.shopbtn4event}
if(savegame.shopbtn5=="used"){$("#shopbtn5").html(savegame.shopbtn5);document.getElementById("shopbtn5").style=savegame.shopbtn5style;document.getElementById("shopbtn5").className=savegame.shopbtn5class;eval(savegame.shopbtn5event);shopbtn5event=savegame.shopbtn5event}
if(savegame.shopbtn6=="used"){$("#shopbtn6").html(savegame.shopbtn6);document.getElementById("shopbtn6").style=savegame.shopbtn6style;document.getElementById("shopbtn6").className=savegame.shopbtn6class;eval(savegame.shopbtn6event);shopbtn6event=savegame.shopbtn6event}
if(savegame.shopbtn7=="used"){$("#shopbtn7").html(savegame.shopbtn7);document.getElementById("shopbtn7").style=savegame.shopbtn7style;document.getElementById("shopbtn7").className=savegame.shopbtn7class;eval(savegame.shopbtn7event);shopbtn7event=savegame.shopbtn7event}
if(savegame.shopbtn8=="used"){$("#shopbtn8").html(savegame.shopbtn8);document.getElementById("shopbtn8").style=savegame.shopbtn8style;document.getElementById("shopbtn8").className=savegame.shopbtn8class;eval(savegame.shopbtn8event);shopbtn8event=savegame.shopbtn8event}
if(savegame.shopbtn9=="used"){$("#shopbtn9").html(savegame.shopbtn9);document.getElementById("shopbtn9").style=savegame.shopbtn9style;document.getElementById("shopbtn9").className=savegame.shopbtn9class;eval(savegame.shopbtn9event);shopbtn9event=savegame.shopbtn9event}
if(typeof savegame.magic!=="undefined"){magic=savegame.magic;clickingMult=savegame.clickingMult;ind=savegame.ind;showGen=savegame.showGen
clickPower=savegame.clickPower;generators.teddy.amount=savegame.teddy;generators.slime.amount=savegame.slime;generators.troll.amount=savegame.troll;generators.cookie.amount=savegame.cookie;generators.bologna.amount=savegame.bologna;generators.unicorn.amount=savegame.unicorn;generators.lnmonster.amount=savegame.lnmonster;generators.bigfoot.amount=savegame.bigfoot;generators.nymph.amount=savegame.nymph;generators.dragon.amount=savegame.dragon;generators.phoenix.amount=savegame.phoenix;generators.demonteddy.amount=savegame.demonteddy;generators.teddy.mult=savegame.teddymult;generators.slime.mult=savegame.slimemult;generators.troll.mult=savegame.trollmult;generators.cookie.mult=savegame.cookiemult;generators.bologna.mult=savegame.bolognamult;generators.unicorn.mult=savegame.unicornmult;generators.lnmonster.mult=savegame.lnmonstermult;generators.bigfoot.mult=savegame.bigfootmult;generators.nymph.mult=savegame.nymphmult;generators.dragon.mult=savegame.dragonmult;generators.phoenix.mult=savegame.phoenixmult;generators.demonteddy.mult=savegame.demonteddymult;for(var i=84;i<=showGen;i++){$("#l"+i+"anl").css("display","");}
update();}
if(typeof Date.parse(localStorage.oldDate)!=="object"){var newDate=new Date;var diff=(newDate-Date.parse(localStorage.oldDate))/ 1000;if((diff>=60)&&(diff<=1814400)){diff=diff*prestigeBonus*generators.teddy.amount*generators.teddy.mult+generators.slime.amount*generators.slime.mult+generators.troll.amount*generators.troll.mult+generators.cookie.amount*generators.cookie.mult+generators.bologna.amount*generators.bologna.mult+generators.unicorn.amount*generators.unicorn.mult+generators.lnmonster.amount*generators.lnmonster.mult+generators.bigfoot.amount*generators.bigfoot.mult+generators.nymph.amount*generators.nymph.mult+generators.dragon.amount*generators.dragon.mult+generators.phoenix.amount*generators.phoenix.mult+generators.demonteddy.amount*generators.demonteddy.mult;window.alert("You received\n"+abbreviateNumber(rogueDec(diff))+"\nmagic while you were away.")
for(var i=100;i>0;--i){magicClick(diff / 100);}}else if(diff>2592000){window.alert("Y U no play my game");}}}
function unload(){var oldDate=new Date();localStorage.oldDate=oldDate;}
function reset(type){if(type=="hard"){localStorage.removeItem("save");localStorage.removeItem("date");magicAllTime=0;}
magic=0;ind=0;showGen=83;clickingMult=0;clickPower=1;generators.teddy.amount=0;generators.slime.amount=0;generators.troll.amount=0;generators.cookie.amount=0;generators.bologna.amount=0;generators.unicorn.amount=0;generators.lnmonster.amount=0;generators.bigfoot.amount=0;generators.nymph.amount=0;generators.dragon.amount=0;generators.phoenix.amount=0;generators.demonteddy.amount=0;generators.teddy.mult=0.1;generators.slime.mult=0.5;generators.troll.mult=2;generators.cookie.mult=5;generators.bologna.mult=15;generators.unicorn.mult=50;generators.lnmonster.mult=250;generators.bigfoot.mult=1000;generators.nymph.mult=5000;generators.dragon.mult=25000;generators.phoenix.mult=100000;generators.demonteddy.mult=1000000;for(var i=1;i<10;++i){var oldElement=document.getElementById("shopbtn"+i);var newElement=oldElement.cloneNode(true);oldElement.parentNode.replaceChild(newElement,oldElement);$("#shopbtn"+i).html(i);document.getElementById("shopbtn"+i).className="empty";$("#shopbtn"+i).css("display","none");}
for(var i=84;i<=92;i++){$("#l"+i+"anl").css("display","none");}}
function prestige(){var prestige=abbreviateNumber(Math.floor((Math.pow((magicAllTime / 1000000000000),(1 / 3)))));if(prestige==lastPrestige){window.confirm("You can't prestige yet.")}else if(window.confirm("Do you want to prestige?\nyou'll get "+(prestige-lastPrestige)+" prestige \n(Each prestige is a 1% bonus)")){lastPrestige=prestige
prestigeBonus=1+(prestige*0.1);reset("soft");}}
function update(){$("#mps").html(abbreviateNumber(rogueDec(prestigeBonus*generators.teddy.amount*generators.teddy.mult+generators.slime.amount*generators.slime.mult+generators.troll.amount*generators.troll.mult+generators.cookie.amount*generators.cookie.mult+generators.bologna.amount*generators.bologna.mult+generators.unicorn.amount*generators.unicorn.mult+generators.lnmonster.amount*generators.lnmonster.mult+generators.bigfoot.amount*generators.bigfoot.mult+generators.nymph.amount*generators.nymph.mult+generators.dragon.amount*generators.dragon.mult+generators.phoenix.amount*generators.phoenix.mult+generators.demonteddy.amount*generators.demonteddy.mult)));$("#magic").html(abbreviateNumber(rogueDec(magic)));$("#teddy").html(generators.teddy.amount);$("#slime").html(generators.slime.amount);$("#troll").html(generators.troll.amount);$("#cookie").html(generators.cookie.amount);$("#bologna").html(generators.bologna.amount);$("#unicorn").html(generators.unicorn.amount);$("#lnmonster").html(generators.lnmonster.amount);$("#bigfoot").html(generators.bigfoot.amount);$("#nymph").html(generators.nymph.amount);$("#dragon").html(generators.dragon.amount);$("#phoenix").html(generators.phoenix.amount);$("#demonteddy").html(generators.demonteddy.amount);$("#teddyPrice").html(abbreviateNumber(Math.floor(10*Math.pow(1.1,generators.teddy.amount))));$("#slimePrice").html(abbreviateNumber(Math.floor(50*Math.pow(1.1,generators.slime.amount))));$("#trollPrice").html(abbreviateNumber(Math.floor(100*Math.pow(1.1,generators.troll.amount))));$("#cookiePrice").html(abbreviateNumber(Math.floor(500*Math.pow(1.1,generators.cookie.amount))));$("#bolognaPrice").html(abbreviateNumber(Math.floor(2000*Math.pow(1.1,generators.bologna.amount))));$("#unicornPrice").html(abbreviateNumber(Math.floor(10000*Math.pow(1.1,generators.unicorn.amount))));$("#lnmonsterPrice").html(abbreviateNumber(Math.floor(80000*Math.pow(1.1,generators.lnmonster.amount))));$("#bigfootPrice").html(abbreviateNumber(Math.floor(400000*Math.pow(1.1,generators.bigfoot.amount))));$("#nymphPrice").html(abbreviateNumber(Math.floor(1666666*Math.pow(1.1,generators.nymph.amount))));$("#dragonPrice").html(abbreviateNumber(Math.floor(10000000*Math.pow(1.1,generators.dragon.amount))));$("#phoenixPrice").html(abbreviateNumber(Math.floor(55000000*Math.pow(1.1,generators.phoenix.amount))));$("#demonteddyPrice").html(abbreviateNumber(Math.floor(1000000000*Math.pow(1.1,generators.demonteddy.amount))));}
function rogueDec(n){if(n>1000){n=Math.round(n);}else{n=Math.round(n*10)/ 10;}
return n;}
function abbreviateNumber(value){if(numberType==0){var newValue=value;if(value>=1000){var suffixes=["","k","m","b","t","q","Q","s","S"];var suffixNum=Math.floor((""+value).length / 3);var shortValue='';for(var precision=3;precision>=3;precision--){shortValue=parseFloat((suffixNum!=0?(value / Math.pow(1000,suffixNum)):value).toPrecision(precision));var dotLessShortValue=(shortValue+'').replace(/[^a-zA-Z 0-9]+/g,'');if(dotLessShortValue.length<=2){break;}}
if(shortValue%1!=0)shortNum=shortValue.toFixed(1);newValue=shortValue+suffixes[suffixNum];}
return newValue;}else if(numberType==1){return value.toExponential(2);}else if(numberType==2){return value;}}
window.setInterval(function(){magicClick(rogueDec(prestigeBonus*generators.teddy.amount*generators.teddy.mult+generators.slime.amount*generators.slime.mult+generators.troll.amount*generators.troll.mult+generators.cookie.amount*generators.cookie.mult+generators.bologna.amount*generators.bologna.mult+generators.unicorn.amount*generators.unicorn.mult+generators.lnmonster.amount*generators.lnmonster.mult+generators.bigfoot.amount*generators.bigfoot.mult+generators.nymph.amount*generators.nymph.mult+generators.dragon.amount*generators.dragon.mult+generators.phoenix.amount*generators.phoenix.mult+generators.demonteddy.amount*generators.demonteddy.mult)/ 25);update();},40);window.setInterval(function(){save();console.log("saved")},10000);
