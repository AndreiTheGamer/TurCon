let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let myVerb = document.getElementById("verb");

  document.getElementById("ben").innerHTML = "Ben ";
  document.getElementById("sen").innerHTML = "Sen ";
  document.getElementById("o").innerHTML = "O ";
  document.getElementById("biz").innerHTML = "Biz ";
  document.getElementById("siz").innerHTML = "Siz ";
  document.getElementById("onlar").innerHTML = "Onlar ";

  if (myVerb.value == "") {
    alert("Introduce un verb!");
  } else {
    const vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
    const hardCons = ["f", "s", "t", "k", "ç", "ş", "h", "p"];
    var supl = "";
    var hard = "";
    if(hardCons .includes(myVerb.value[myVerb.value.length - 1])){
        hard = "t";
    }else{
        hard = "d";
    }
    for(var i = myVerb.value.length-1; i >=0; i--){
        if(vowels.includes(myVerb.value[i])){
            if(myVerb.value[i]=="a" || myVerb.value[i]=="ı") supl="ı";
            if(myVerb.value[i]=="e" || myVerb.value[i]=="i") supl="i";
            if(myVerb.value[i]=="o" || myVerb.value[i]=="u") supl="u";
            if(myVerb.value[i]=="ö" || myVerb.value[i]=="ü") supl="ü";
            break;
        }
    }

    document.getElementById("ben").innerHTML += myVerb.value + hard + supl + "m";
    document.getElementById("sen").innerHTML += myVerb.value + hard + supl + "n";
    document.getElementById("o").innerHTML += myVerb.value + hard + supl;
    document.getElementById("biz").innerHTML += myVerb.value + hard + supl + "k";
    document.getElementById("siz").innerHTML += myVerb.value + hard + supl + "n" + supl + "z";
    if(supl=="ı" || supl=="u")  document.getElementById("onlar").innerHTML += myVerb.value + hard + supl + "lar";
    if(supl=="i" || supl=="ü")  document.getElementById("onlar").innerHTML += myVerb.value + hard + supl + "ler";

    myVerb.value = "";
  }
});
