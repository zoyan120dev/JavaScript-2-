function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

const max = getMax(56, 79);
console.log('max of two is:', max);

const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log('Jim is the Ultimate boss')
}else if(tim > jim && tim > kim){
    console.log('Tim is the boss')
}else{
    console.log('Kim is the kardeshias boss')
}


const maxNum = Math.max(12,465,67,6879,98,56,);
console.log(maxNum);


const height = [65,66,68,72,650,65,66]

function getheight(numbers){
    
    let max = numbers[0]
    for(const num of numbers){
         if(num > max){
            max = num;
         }
    }
    return max;
}

const maxheight = getheight(height);
console.log(maxheight)


function woodQouanTity(chairQouantity, tableQouantity, bedQouantity){
    const perchairWood = 3;
    const perTableWood = 10;
    const perBedWood = 30;
     
    const chairTotalWood = chairQouantity  * perchairWood;
    const tableTotalWood = tableQouantity * perTableWood;
    const bedTotalWood = bedQouantity * perBedWood;
    
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQouanTity(0,0, 2);
console.log('wood needed', wood)


function festionPrice(totalShirt, totalPant, totalShoe,){
    const shirtPrice = 500;
    const pantPrice = 300;
    const ShoeProcce = 900;

    const totalShartPrice =  totalShirt * shirtPrice;
    const totalPantPrice = totalPant * pantPrice;
    const totalShoePrice = totalShoe * ShoeProcce;

    const totalPrice = totalShartPrice + totalPantPrice + totalShoePrice;

    return totalPrice;
}

const myPrice = festionPrice(2, 3, 4);
console.log('Total Market Price:', myPrice);


const Prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000]

function getMinPrice(lowPrice){
    let min = lowPrice[0]
    for(const num of lowPrice){
        if(num < min){
            min = num;
        }
    }

    return min;
}

const cheep = getMinPrice(Prices);
console.log('Cheapest One is:',cheep);



const Phone = [
   {
    name:'samsung',
    price:20000,
    camera:'12mp',
    color:'black'
   },

   {
    name:'xoami',
    price:18000,
    camera:'12mp',
    color:'black'
   },

   {
    name:'oppo',
    price:30000,
    camera:'12mp',
    color:'black'
   },


   {
    name:'Iphone',
    price:100000,
    camera:'12mp',
    color:'black'
   },

   {
    name:'WALTON',
    price:12000,
    camera:'12mp',
    color:'black'
   },

   {
    name:'hTC',
    price:10000,
    camera:'12mp',
    color:'black'
   },
]




function getCheapestPhone(phn){
    let minphn = phn[0]
   for(const phones of phn){
    if(phones.price < minphn.price){
        minphn = phones;
    }
   }
   return minphn;
}

const cheap = getCheapestPhone(Phone)
console.log('Cheapest Phone Is:', cheap);


const Product = [
    {name:'chiruni', price:100},
   {name:'shirt', price:700},
   {name:'pant', price:1200}, 
    {name:'ayna', price:150},
    {name:'naricleTel', price:200},
]

function  getShoppingTotal(products){
    let total = 0;
   for(const produc of products){
       total = total + produc.price;

   }
   return total;
}

const total = getShoppingTotal(Product);
console.log('mot azke amr khoroj holo' ,total);


const myProduct = [
  
      {name:"shampoo", price:300, quantity:2},
      {name:"shampoo", price:300, quantity:2},
      {name:"shampoo", price:300, quantity:2},
      {name:"shampoo", price:300, quantity:2},
      {name:"shampoo", price:300, quantity:2}
]


function cartTotal (products){
    let total = 0;
    for(const productes of products){
        const thisItemsCost = productes.price * productes.quantity;
        total = total + thisItemsCost;
    }

    return total;

}

const shopingCost = cartTotal(myProduct);
console.log('Total Market Price:', shopingCost)



function discouintPrice(qaountity){
    if(qaountity <= 100){
        const total = qaountity * 100;
        return total;
    }else if(qaountity <=200){
          const total = qaountity * 90;
          return total;
    } else{
        const total = qaountity * 70;
        return total;
    }
}

const totalDiscount = discouintPrice(200);
console.log(totalDiscount);


function layreDicountTotal(qaountity){
    const fristonePrice = 100;
    const secondOnePrice = 90;
    const aboveOnePrice = 70;
    if(qaountity <= 100){
        const total = qaountity * fristonePrice;
        return total;
    }else if(qaountity <= 200){  
        const fristTotal = 100 * fristonePrice;
        const remainnigQouantity = qaountity - 100;
        const remainnigTotal = remainnigQouantity * secondOnePrice;
        const total = fristTotal + remainnigTotal;
        return total;
    }else{
        const first100Total = 100 * fristonePrice;
        const second100Total = 100 * secondOnePrice;
        const remainingQouantity = qaountity - 200;
        const remainniTotal = remainingQouantity * aboveOnePrice;
        const total = first100Total + second100Total + remainniTotal;
        return total;
    }
}

const mainResult = layreDicountTotal(201);
console.log(mainResult);






