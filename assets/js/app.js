
let num = 1000;

primeNum:
for(let i = 3; i <= num; i++){

    for(let j = 2; j < i; j++){
        if(i % j == 0){
            continue primeNum;
        }
    }

        console.log(i);
}


  
    


    