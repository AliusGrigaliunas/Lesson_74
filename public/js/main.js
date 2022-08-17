"use strict";
console.group('1. Sukurkite funkciją "joinArrays", kuri apjungia 2 masyvus. Grąžinamo masyvo tipas turi būti lygus parametrais perduotų masyvų tipų sajungai');
{
    function joinArrays(arr1, arr2) {
        return arr1.concat(arr2);
    }
    function joinArrays2(arr1, arr2) { return [...arr1, ...arr2]; }
    ;
    const array1 = [6, 5];
    const array2 = [9, 7];
    const results = joinArrays(array1, array2);
    const results2 = joinArrays2(array1, array2);
    console.log(results);
    console.log(results2);
}
console.groupEnd();
console.group('2. Sukurkite funkciją "joinObjects", kuri apjungia 2 objektus. Apjungtam objekto tipe, turi būti visos savybės kurios buvo objekte pirmu parametru, ir objekte antru parametru.');
{
    function joinObjects(obj1, obj2) { return { ...obj1, ...obj2 }; }
    const object1 = {
        a: 1,
        b: 2,
        c: 5,
    };
    const object2 = {
        a: 6,
        d: 8,
        e: 10,
    };
    const results1 = joinObjects(object2, object1);
    console.log(results1);
}
console.groupEnd();
console.group('3. Sukurkite funkciją "applyFilters", kuri priima masyvą elementų, ir masyvą filtravimo funkcijų. Panaudokite visas filtravimo funkcijas masyvo elementams filtruoti.');
{
    const applyFilters = (arr, paramFunction, paramFunction2) => {
        return [...arr].filter(paramFunction).reduce(paramFunction2);
    };
    const array1 = ['degtine', 'alų', 'vyną', 'naminė', 'viskis'];
    const array2 = [1, 5, 8, 10];
    const results = applyFilters(array1, (a) => a.length > 5, (a, b) => b[0].toUpperCase() + b.slice(1) + ' ' + a[0].toUpperCase() + a.slice(1));
    const results2 = applyFilters(array2, (a) => a > 3, (a, b) => a + b);
    console.log({ results });
    console.log(results2);
}
console.groupEnd();
console.group('4. Sukurkite funkciją "applySortings", kuri priima masyvą elementų, ir masyvą rikiavimo funkcijų. Panaudokite visas rikiavimo funkcijas masyvo elementams rikiuoti.');
{
}
console.groupEnd();
console.group('5. Sukurkite funkciją "groupBy", kuri priima masyvą objektų, ir obejkto savybės pavadinimą. Funkcija turi sugrupuoti masyvo elementus, pagal savybės pavadinimo reikšmes');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map