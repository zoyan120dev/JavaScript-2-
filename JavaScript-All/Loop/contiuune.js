for (let i = 1 ; i < 200 ; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}


let n = 0;
while(n < 15){
    n++;
    if(n % 5 !== 0){
        continue
    }
    console.log(n)
}