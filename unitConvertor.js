//selectors
var feet = document.querySelector("#feet");
var inch = document.querySelector("#inch");
var sqrFeet = document.querySelector("#sqrFeet");
var sqrMeter = document.querySelector("#sqrMeter");
var kilo = document.querySelector("#kilo");
var pound = document.querySelector("#pound");

//feet to inch
feet.addEventListener("input", function(){
    let f = this.value;
    let i = f*12;
    inch.value = i;
});

inch.addEventListener("input", function(){
    let i = this.value;
    let f = i/12;

    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
});
//sqr-meter to sqr-feet
sqrMeter.addEventListener("input", function(){
    let sm = this.value;
    let sf = sm*10.76;
    sqrFeet.value = sf;
});

sqrFeet.addEventListener("input", function(){
    let sf = this.value;
    let sm = sf/10.76;

    if(!Number.isInteger(sm)){
        sm = sm.toFixed(2);
    };
    sqrMeter.value = sm;
});
//kilogram to pound
kilo.addEventListener("input", function(){
    let kg = this.value;
    let p = kg*2.20;
    if(!Number.isInteger(p)){
        p = p.toFixed(2);
    };
    pound.value = p;
});

pound.addEventListener("input", function(){
    let p = this.value;
    let kg = p/2.20;

    if(!Number.isInteger(kg)){
        kg = kg.toFixed(2);
    };
    kilo.value = kg;
});