//ciclo per stamparmi i numeri da 1 a 20
for (let i = 1; i <= 100; i++) {

    //verifico che i numeri siano multipli di 3 e 5
   if (i % 3 == 0 && (i % 5 == 0)) {
        console.log(`FizzBuzz`);

    // verifico se sono solo multipli di 3
   } else if (i % 3 == 0) {
        console.log(`Fizz`);

    // verifico se sono solo multipli di 5
   } else if (i % 5 == 0){
        console.log(`Buzz`);
    }
        // stampo i numeri che non sono multipli di 3, 5 o entrambi
        else{
            console.log(i);
        }
   
}