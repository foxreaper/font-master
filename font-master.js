var d = document.getElementById("master");
  
  function font(){
  var lett = document.getElementById("master").clientWidth;
  

  setInterval(function(){font()},100)}

 function getCount(matchResult) {
  return matchResult ? matchResult.length : 0;
}


function master(){
var pm = document.getElementById("master").querySelectorAll('div');
  var num ;
  for (num = 0; num < pm.length; num++){


  

  var str = pm[num].textContent;
var countA = getCount(str.match(/A/g));
var countB = getCount(str.match(/B/g));
var countC = getCount(str.match(/C/g));
var countD = getCount(str.match(/D/g));
var countE = getCount(str.match(/E/g));
var countF = getCount(str.match(/F/g));
var countG = getCount(str.match(/G/g));
var countH = getCount(str.match(/H/g));
var countI = getCount(str.match(/I/g));
var countJ = getCount(str.match(/J/g));
var countK = getCount(str.match(/K/g));
var countL = getCount(str.match(/L/g));
var countM = getCount(str.match(/M/g));
var countN = getCount(str.match(/N/g));
var countO = getCount(str.match(/O/g));
var countP = getCount(str.match(/P/g));
var countQ = getCount(str.match(/Q/g));
var countR = getCount(str.match(/R/g));
var countS = getCount(str.match(/S/g));
var countT = getCount(str.match(/T/g));
var countU = getCount(str.match(/U/g));
var countV = getCount(str.match(/V/g));
var countW = getCount(str.match(/W/g));
var countX = getCount(str.match(/X/g));
var countY = getCount(str.match(/Y/g));
var countZ = getCount(str.match(/Z/g));
var counta = getCount(str.match(/a/g));
var countb = getCount(str.match(/b/g));
var countc = getCount(str.match(/c/g));
var countd = getCount(str.match(/d/g));
var counte = getCount(str.match(/e/g));
var countf = getCount(str.match(/f/g));
var countg = getCount(str.match(/g/g));
var counth = getCount(str.match(/h/g));
var counti = getCount(str.match(/i/g));
var countj = getCount(str.match(/j/g));
var countk = getCount(str.match(/k/g));
var countl = getCount(str.match(/l/g));
var countm = getCount(str.match(/m/g));
var countn = getCount(str.match(/n/g));
var counto = getCount(str.match(/o/g));
var countp = getCount(str.match(/p/g));
var countq = getCount(str.match(/q/g));
var countr = getCount(str.match(/r/g));
var counts = getCount(str.match(/s/g));
var countt = getCount(str.match(/t/g));
var countu = getCount(str.match(/u/g));
var countv = getCount(str.match(/v/g));
var countw = getCount(str.match(/w/g));
var countx = getCount(str.match(/x/g));
var county = getCount(str.match(/y/g));
var countz = getCount(str.match(/z/g));
var countspace = getCount(str.match(/ /g));
var groupa = 22*(counti+countj+countl);
var groupb = 28*(countI+countf+countt);
var groupc = 33*(countr);
var groupd = 50*(countJ+countc+countk+counts+countv+countx+county+countz);
var groupe = 56*(countL+counta+countb+countd+counte+countg+counth+countn+counto+countp+countq+countu);
var groupf = 61*(countF+countT+countZ);
var groupg = 67*(countA+countB+countE+countK+countP+countS+countV+countX+countY);
var grouph = 72*(countC+countD+countH+countN+countR+countU+countw);
var groupi = 78*(countG+countO+countQ);
var groupj = 83*(countM+countm);
var groupk = 94*(countW);
var groupl = 28*(countspace);

var totalsize = (groupa+groupb+groupc+groupd+groupe+groupf+groupg+grouph+groupi+groupj+groupk+groupl)/100;
var lett = pm[num].clientWidth;
var final = Math.floor(lett / totalsize) ;
pm[num].style.fontSize=final+"px";
}
setInterval(function(){alert()},100)
}


window.onload = function(){ 
  
  font();
  master();


}
