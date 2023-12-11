// ------------------EVENT EMITTER-------------
const orderPizzar = require("./order");

const orderP = new orderPizzar();

orderP.on("order", (size, topping)=>{
    console.log(`baking ${size} pizza with ${topping}`);
});

orderP.on("order", (size)=> {
    if(size === "large"){
        console.log("Drnk is complimentory");
    }
})

orderP.orderp("large", "mashrooms");