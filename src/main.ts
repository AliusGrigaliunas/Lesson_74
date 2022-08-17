/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 10 min finished at 11:28;
console.group('1. Sukurkite funkciją "joinArrays", kuri apjungia 2 masyvus. Grąžinamo masyvo tipas turi būti lygus parametrais perduotų masyvų tipų sajungai');
{ 
  function joinArrays <T>(arr1:T[], arr2:T[]):T[] { 
    return arr1.concat(arr2);
  }

  function joinArrays2 <T,K>(arr1:T[],arr2:K[]):(T|K)[] {return [...arr1, ...arr2]};

  const array1 = [6,5];
  const array2 = [9,7];

  const results = joinArrays(array1,array2);
  const results2 = joinArrays2(array1,array2)

  console.log(results);
  console.log(results2)
}
console.groupEnd();

// 25 min
console.group('2. Sukurkite funkciją "joinObjects", kuri apjungia 2 objektus. Apjungtam objekto tipe, turi būti visos savybės kurios buvo objekte pirmu parametru, ir objekte antru parametru.');
/*
  hints:
    * TS: generic constraints
    * JS: spread operator
*/
{
  type CommonProperties<T extends object, K extends Object> = keyof (T | K);

  type Merge<T extends Object, K extends Object> = Omit<T, CommonProperties<T, K>> & K;

  function joinObjects <T extends Object, K extends Object>(obj1:T,obj2:K):Merge<T,K> { return {...obj1,...obj2}}

  const object1 = {
    a:1,
    b:2,
    c:5,
  }
  const object2 = {
    a:6,
    d:8,
    e:10,
  }

  const results1 = joinObjects(object2,object1);

  console.log(results1);

}
console.groupEnd();

// 30 min
console.group('3. Sukurkite funkciją "applyFilters", kuri priima masyvą elementų, ir masyvą filtravimo funkcijų. Panaudokite visas filtravimo funkcijas masyvo elementams filtruoti.');
/*
  hints:
    * JS: Array.prototype.filter
    * JS: Array.prototype.reduce
*/
{
  const applyFilters = <T>(arr:T[], paramFunction: (a:T) => boolean, paramFunction2: (a:T,b:T) => (T)) => {
      return [...arr].filter(paramFunction).reduce(paramFunction2)
  }

  const array1 = ['degtine','alų','vyną','naminė','viskis'];
  const array2 = [1,5,8,10]

  const results = applyFilters(
    array1,
    (a) => a.length > 5,
    (a,b) => b[0].toUpperCase() + b.slice(1) + ' ' + a[0].toUpperCase() + a.slice(1)
    );

    const results2 = applyFilters(array2, 
      (a) => a > 3,
      (a,b) => a + b
      )

  console.log({results})
  console.log(results2);
  
}
console.groupEnd();

// 40 min
console.group('4. Sukurkite funkciją "applySortings", kuri priima masyvą elementų, ir masyvą rikiavimo funkcijų. Panaudokite visas rikiavimo funkcijas masyvo elementams rikiuoti.');
/*
  Kartais norime išrikiuoti masyvą pagal kelis kriterijus:
    Rikiuojame žmones pagal miestus,
    o pagal miestus išrikiuotus žmones išrikiuojame pagal amžių, nekeičiant rikiavimo pagal miestus,
    o tuomet pagal pavardę, nekeičiant prieš tai buvusių rikiavimų

    Kitaip tariant rikiuojame:
      1. Pagal Miestą, o iš to paties miesto rikiuojame:
        2. Pagal amžių, o iš to paties miesto ir to paties amžiaus rikiuojame:
          3. Pagal pavardę

  Pavyzdžiui:

  Miestas 1↑ | Pavardė 3↑ | Amžius 2↑
  ------------------------------------
  Kaunas     | Žinlinskas | 16
  Kaunas     | Mažuronis  | 19
  Kaunas     | Britkus    | 28
  Kaunas     | Malūnas    | 32
  Kaunas     | Princas    | 32
  Kaunas     | Žiobaras   | 32
  Kaunas     | Griovys    | 47
  Rietavas   | Žinduolis  | 29
  Rietavas   | Varkienė   | 63
  Vilnius    | Bandziūga  | 17
  Vilnius    | Fosforas   | 22
  Vilnius    | Hienytė    | 22
  Vilnius    | Amadėjus   | 23
  Vilnius    | Klinkaitė  | 32

  Parašykite tokį BENDRINĮ algoritmą, kuris priimtų parametrus
    * duomenų masyvą
    * rikiavimo funkcijų masyvą
  Ir išrikiuotų masyvą pritaikant visų rikiavimo funkcijų kriterijus,
    pagal funkcijų masyve esančių rikiavimo funkcijų eiliškumą

  hints:
    * JS: Array.prototype.sort
    * JS: spread operator
    * Programming: Sorting function | Sorting function return type
    * Programming: Return Early Pattern
*/
{
}
console.groupEnd();

// 50 min
console.group('5. Sukurkite funkciją "groupBy", kuri priima masyvą objektų, ir obejkto savybės pavadinimą. Funkcija turi sugrupuoti masyvo elementus, pagal savybės pavadinimo reikšmes');
/*
  hints:
    * JS: Array.prototype.reduce
*/
{
}
console.groupEnd();