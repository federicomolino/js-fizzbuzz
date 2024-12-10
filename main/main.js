//ciclo per stamparmi i numeri da 1 a 20
for (let i = 1; i <= 20; i++) {

    //verifico che i numeri siano multipli di 3 e 5
   if (i % 3 == 0 && (i % 5 == 0)) {
        console.log(`${i} FizzBuzz`);

    // verifico se sono solo multipli di 3
   } else if (i % 3 == 0) {
        console.log(`${i} Fizz`);

    // stampo il restante dei numeri
   } else{
        console.log(i);
   }
}