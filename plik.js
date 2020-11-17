

// komentarz
/*
let tab3;
let tab = [1,2,3,4];
let tab2=[];
tab2[0]="www";
tab2[5]=4;
*/
/*
for(let i=0; i<tab2.length ; i++ )
{
	document.write(tab2[i] + "</br>");
	
}
*/

//document.write(Array.isArray(tab3));
//document.write(typeof tab);

// metody tablicowe
// metoda push -> wstawia nowy element do tablicy na koniec
/*
tab.push(50, 51,52);
document.write(tab);
*/

// metoda pop - kasuje ostatni element w tablicy
/*
tab.pop();
document.write(tab);
*/
// metoda unshift - wstawia nowy element na początku tablicy

//tab.unshift(10);
//document.write(tab);

// metoda shift - usuwa pierwszy element z tablicy
//tab.shift()
//document.write(tab);

// metoda join  - zmiana tablicy na stringa

//let tab = [1,3,5];

//let tekst = tab.join(".");
//document.write(tekst);
//document.write(typeof tekst);
/*
let zmienna = "1,2,3";
let tab = zmienna.split(",");
document.write(tab);
*/
// metoda reverse - odwraca elemnty tablicy
/*
let tab = [1,2,3];
tab.reverse();
document.write(tab);
*/

// metoda indexOf - wyszukuje dany element w tablicy
/*
let tab = ["Marta","Patrycja","Alicja","Marta"];

let imie = prompt("Podaj imie");


if(tab.indexOf(imie)>=0)
{
	document.write(imie + " w tablicy jest na miejscu "+tab.indexOf(imie));
	
}else
{
	document.write("Slowa nie ma w tablicy");
}
*/

//metoda lastIndexOf - metoda zwaraca ostatni znaleziony element z tablicy
/*
let tab = ["Marta","Patrycja","Alicja","Marta"];
let imie = prompt("Podaj imie");


if(tab.lastIndexOf(imie)>=0)
{
	document.write(imie + " w tablicy jest na miejscu "+tab.lastIndexOf(imie));
	
}else
{
	document.write("Slowa nie ma w tablicy");
}
*/

// metoda includes - wyszukuje elementu tablicy zwaraca true albo false
/*
let tab = ["Marta","Patrycja","Alicja","Marta"];
let imie = prompt("Podaj imie");
if(tab.includes(imie))
{
	document.write("istenieje");
}else
{
	
	document.write("nie istenieje");
}
*/

// metoda concat - lączy dwie tablice
/*
let tab1 = [1,2,3];
let tab2 = [5,6,7];

let tab3 = tab2.concat(tab1);
document.write(tab3);
*/


// metoda slice - zwraca kawałek tablicy
/*
let tab = [1,2,3,4,5];

let tab2 = tab.slice(1,-2);
document.write(tab2);




// metoda splice(index,ileUsun,noweEleme....) - dodawania/usuwanie elementów tablicy

let tab = [1,2,3,4,5,6,7];

//tab.splice(2,3);
//document.write(tab);

tab.splice(2,0,"t","k");
document.write(tab);


// Zadanie jest tablica o elementach pies,kot,mysz,ryba,aligator
// Znajdź element o nazwie podanjej przez użytkownika
// i zastap go elementem o nazwie tez podanej przez użytkownika

let tab = ["pies","kot","mysz","ryba","aligator"];
let szukaj = prompt("Podaj nazwe");
let zastap = prompt("Podaj czym zastapic");

let pozycja = tab.indexOf(szukaj);
tab.splice(pozycja,1,zastap);
document.write(tab);



// sortowanie

let tab = ["pies","kot","mysz","ryba","aligator"];
tab.sort();



let tab3= ["Bartek","ania","Celina","agnieszka"];
tab3.sort();

function liczbowa(a,b){
	return a-b;
}

let tab2 = [1,2,21,2.1,32,3.1];
tab2.sort(liczbowa);
document.write(tab2);

*/
//metoda fill - wypłenienie tablicy
/*
let tab = new Array(20);

tab.fill("k");
document.write(tab+"</br>");

tab.fill("piwko",2,6);
document.write(tab+"</br>");

tab.fill("winko",17);
document.write(tab+"</br>");
*/
/*

let tab3= [1,2,3,4,5,12,13,15,14,17,18];



for(let ele of tab3)
{
		if(ele%2==0){
			document.write(ele + "</br>");
		}
}



let zmienna = prompt("Podaj liczbe"); // prompt zwaraca string
zmienna = parseInt(zmienna); //zamieniamy stringa na int

if(zmienna%2==0)
{
	document.write("Parzysta");
}else{
	document.write("nieparzysta");
	
}


for(let i=5;i<=10;i++)
{
	document.write(i + "<br/>");
	
}

// czym się różni if(a==1) od if(a===1);

// co się wyśwetli
/*
let a=2;
document.write(a++); 2
document.write(a); 3
document.write(--a); 2
*/

/*
let a=5;
document.write(++a); 6
document.write(a++); 6
document.write(a); 7



// wyświetl przedział od a do b gdzie a,b podaje uzytkownik
let a = prompt("podaj a");
let b = prompt("podaj b");

a=parseInt(a);
b=parseInt(b);

let suma=0;

for(a;a<=b;a++)
{
	if(a%2==0)
	{
	suma=suma+1;
	}
}

document.write(suma);

// suma liczb dopóki użytkownik nie wpisze 0
let liczba = prompt("Podaj liczbe");
liczba=parseInt(liczba);
let suma=0;
do{
	suma=suma+liczba;
	liczba = prompt("Podaj liczbe");
	liczba=parseInt(liczba);
}while(liczba!=0)

document.write(suma);



let x; let y=0; 
do { 
x=prompt("Podaj liczbe"); 
if (x%2==0) y++; else; 
} 
while(y!=3);
*/
/*
let zmienna = "teskt";
let zmienna2 = 'tekst';

zmienna = '<div class="jakas"></div>';
zmienna2= "<div class="+"\""+"jakas"+"\""+"></div>";

let a = "ala ma kota";
let b=" a kot ma Ale";

let c = a+b;

a=a+" cos";
*/
// wlaściwość stringa

//document.write(a.length); // length pobiera długość stringa

// metody

//document.write(a[5]);
//document.write(a.charAt(5)); // metoda charAt pobiera z tesktu znak na zadanej pozycji

/*
// toUpperCase -> zmiana liter (wszystkich) na duże

let a = "seba";
a=a.toUpperCase();
document.write(a);

//toLowerCase - zmiana liter na małe

a=a.toLowerCase();
document.write(a);
*/

// indexOf - zwraca pozycję szukanego słowa albo litery
//let zmienna = "Ala ma kota a kot ma Ale";

//document.write(zmienna.indexOf("kota"));

// lastIndexOf - zwraca pozycję ostatniego wystąpinia słowa litery

//document.write(zmienna.lastIndexOf("kot"));

// includes - szuka słowa w tekście i zwraca true albo false

//document.write(zmienna.includes("psa"));

// startsWith() i endsWith() - szukanie na początku stringa i na końcu i 
// zwracają true albo false

//document.write(zmienna.startsWith("ala"));
//document.write(zmienna.endsWith("Ale"));

// substr(start,[dl]) - zwraca kawałek tesktu

//let t ="Ala ma kota";

//document.write(t.substr(2)); 
//document.write(t.substr(0,3)); 
//document.write(t.substr(7,3)); 

//substring(start, [stop]) - zwraca kawałek tesktu

//document.write(t.substring(7,3)); //ma
//document.write(t.substring(5));

// slice(start,stop)

//document.write(t.slice(3,7));

//zadanie Adres URL wyćiagnijz adresu domenę
/*
let adres = "www.sttona.net.ue";
let adres2="www.strona.eu";

let gdzie = adres.lastIndexOf(".");
document.write(adres.substr(gdzie+1));
*/

// split(znak,dlugosc) - zwraca tablice 

//let zmienna="Ala ma kota, a kot ma Ale";
//let tab = zmienna.split(" ");

//document.write(tab[2]);

//replace(ciag_szukany, teskt_na_zamiane) - wyszukuje słowa w tekscie i zamieniamy

//let nowa = zmienna.replace("kot","pies");
//document.write(nowa);

//repeat() - powatarzenie tesktu
//let a = "-";
//document.write(a.repeat(20));


// obiekt Date - obiekt który zarządza czasem

//const data = new Date();

//document.write(data);
//document.write(data.getDate()); // zwraca dzien miesiąca
//document.write(data.getDay()); // zwraca dzien tygodznia ( 0 dla niedzieli , 1-pniedziłek , ....)
//document.write(data.getYear()); // zwraca rok aktulany_rok-1900 (wycowana)
//document.write(data.getFullYear()); // zwraca aktulany rok pełny

// godzina
//document.write(data.getHours()); // zwraca aktulaną godzine bez minut
//document.write(data.getMinutes()); // zwraca aktualne minuty
//document.write(data.getSeconds()); // zwraca aktualne sekundy
//document.write(data.getMilliseconds()); // zwraca aktualne milisekundy
//document.write(data.getTime()); // zwraca aktulany czas jako liczbę od godziny 00:00 1 stycznia 1970 roku
/*

//zadnie1 Wyśwetil oaktulną godznę w formacie gg:mm:ss
const godzina = new Date();
//document.write(godzina.getHours()+":"+godzina.getMinutes()+":"+godzina.getSeconds());
// Zadanie2 Zmien zad1 aby wyświelała godzinny, minuty ,sektundy aby 
// dodawało 0 jezeli godzina, minuta, sekunda ma wrtość mniejszą od 10
// np. 08:41:05
let g = godzina.getHours();
let m = godzina.getMinutes();
let s= godzina.getSeconds();
if(g<10)
{
	g='0'+g;
}
if(m<10)
{
	m='0'+m;
}
if(s<10)
{
	s='0'+s;
}
document.write(g+":"+m+":"+s);



// Zadanie, wypisz jaki dzisiaj dzień tygodnia(poniedziałek, wtore ,,,)

const dzien = new Date();

switch(dzien.getDay())
{
	case 0 :
			document.write("Niedziela");
			break;
	case 1 :
			document.write("Poniedzialek");
			break;
	case 2 :
			document.write("Wtorek");
			break;
	case 3 :
			document.write("Sroda");
			break;
	case 4 :
			document.write("Czwartek");
			break;
	case 5 :
			document.write("Piatek");
			break;
	case 6 :
			document.write("Sobota");
			break;
}

*/

// new Date(rok,miesiac,dzien,godzina,minuta,sekunda,milisiekunda)
//const nowa = new Date(2020,9,31);


/*
get - pobieranie
set - ustawianie


const data = new Date();

data.setYear(1582);
data.setMonth(9);
data.setDate(6);
document.write(data);

// za pomocą promta pobierz rok, misiac, dzien i wyswietl jaki będzie
// wtedy dzień tygodnia
*/
/*
Napisz funkcję która zwraca aktualną datę. 
Funkcja przyjmuję argument „separator” która będzie oddzielał części daty
np. fun(-) zwróci nam 23-04-2018, fun(/) zwróci 23/04/2018.


function fun(znak)
{
const data = new Date();
	
return data.getDate()+znak+(data.getMonth()+1)+znak+data.getFullYear();
}

document.write(fun("/"));



function fun(date)
{
	switch(date.getMonth())
	{
		case 0:
			return "Styczen";
			break;
		case 1:
			return "Luty";
			break;
		case 2:
			return "Marzec";
			break;	
	}	
}
const data = new Date(2020,1,10);
//document.write(fun(new Date(2020,2,10)));
document.write(fun(data));



// obiekt Math

//document.write(Math.PI);
//document.write(Math.pow(2,3)); // potegowanie 

//skrypt który liczy pole koła I*r^2

let r = prompt("Podaj promien");
let pole = Math.PI*Math.pow(r,2);

document.write(pole);
*/



//document.write(Math.max(1,2,3,40,2));
//document.write(Math.min(1,2,3,40,2));


//document.write(Math.round(2.49));
//document.write(Math.random());
/*
function losowa(min,max)
{
	return Math.floor((Math.random()*(max-min)))+min;
}

let liczba_losowa = losowa(1,11);
*/
// zadanie , napisz skrypt który losuje liczbę z przedzialu 1-10
// poiera od użytkownika liczbę i sprawdza czy gracz trafił
// Jeżeli nie trafił to podowiadamy czy liczba losowa
// jest mniejsza czy większa
// Program zlicza liczbę prób

/*
let strzal;
let proba=0;
do{
	strzal = prompt("Podaj liczbe");
	proba++;
	if(strzal>liczba_losowa)
	{
		alert("Za duzo");
	}
	if(strzal<liczba_losowa)
	{
		alert("Za malo");
	}
}while(strzal!=liczba_losowa)

alert("trafiles za "+proba);
*/

//let liczba = 255;
//document.write(liczba.toString(16)); // toString metoda to zamiany systemu dziesietnego na inny

//let liczba_system="77";
//document.write(parseInt(liczba_system,8));
/*
let liczba = prompt("Podaj liczbe");

if(isNaN(liczba))
{
	document.write("To NIE liczba");
}else{
	document.write("To jest liczba");
	
}

//isNaN - sprawdza czy not a number
// typeof - zwraca typ

let liczba = prompt("podaj liczbe");
if(!(isNaN(liczba))){
	
	document.write("To jest liczba");
}
*/
/*Stwórz diva i wielkosci 100x100 o kolorze czarnym tekt biały
po najechaniu na tego diva ma się wyswetlić napisz Super Szkoła
w srodku tego diva po wyjechaniu ma się wy swtli napisz
Dlaczego nas opuszczasz?




document.body.style.color="red";
document.head.title="nowy title";



let zdjecie = document.querySelector("img");

zdjecie.addEventListener("click",function(){
	zdjecie.src="jolgaz_goo1.png";
	zdjecie.alt="nowy opis";
});


let s = document.querySelector("script");

document.body.addEventListener("click", function(){
	s.src="nowy.js";
	
	
});



let tab = document.querySelectorAll("link");
let zmienna;
for(let i=0; i<tab.length;i++)
{
	
	
	if(tab[i].type == "text/css")
	{
		 zmienna = tab[i];
	}
	
}
document.write(zmienna.rel);



let a = document.querySelector("#jeden");
let b = document.querySelector("#dwa");
let przycisk = document.querySelector("#przycisk");
let wynik = document.querySelector("#wynik");

przycisk.addEventListener("click", function(){
	let pole = a.value*b.value;
	wynik.innerHTML = pole;
	
});





let pole_1 = document.querySelector("#rodzaj");
let pole_2 = document.querySelector("#ilosc");
let przycisk = document.querySelector("#przycisk");
let wynik = document.querySelector("#wynik");

przycisk.addEventListener("click", function(){
	let oblicenie;
	let koszt;
	if(pole_1.value==1){
		koszt=4;
		oblicenie = koszt*pole_2.value;
	}else if(pole_1.value==2){
		koszt=3.5;
		oblicenie = koszt*pole_2.value;
	}else{
		koszt=0;
		oblicenie = koszt*pole_2.value;
	}
wynik.innerHTML="koszt paliwa: "+oblicenie+"zl";
});




let a = document.querySelector("#a");
let b = document.querySelector("#b");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let mnoz = document.querySelector("#mnozenie");
let dziele = document.querySelector("#dziel");
let potega = document.querySelector("#potega");

let p_wynik = document.querySelector("#wynik");

plus.addEventListener("click", function(){
	let wynik_dzialania;
	let aa = parseFloat(a.value);
	let bb = parseFloat(b.value);
	p_wynik.innerHTML=aa+bb;
	
});

minus.addEventListener("click", function(){
	
	
});


*/


let a= document.querySelector("#a");
let r= document.querySelector("#r");
let n= document.querySelector("#n");
let p = document.querySelector("#przycisk");
let w = document.querySelector("#wynik");


p.addEventListener("click", function(){
	let pierwszy = a.value;
	let roznica = r.value;
	let ilosc = n.value;
	let kk;
	w.innerHTML="Ciag arytmetyczny zawiera wyrazy: ";
	for(let i=0; i<ilosc;i++)
	{
		kk=w.innerHTML;
		w.innerHTML=kk+pierwszy+",";
		pierwszy=parseInt(pierwszy);
		roznica=parseInt(roznica);
		pierwszy=pierwszy+roznica;	
	}
	
	
});











