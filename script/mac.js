

// extra memory selection funtion
function updateExtraMemoryCost(isBuy)
{
    const extraMemoryCost=document.getElementById('extra-memory-cost');
    
    if(isBuy)
    {
        extraMemoryCost.innerText=180;
    }
    else 
    {
        extraMemoryCost.innerText=0;
    }
    calculation();
}


// extra storage selection function
function updateExtraStorageCost(storage)
{
    const extraSsdCost=document.getElementById('extra-ssd-cost');
    if(storage==256)
    {
        extraSsdCost.innerText=0;
    }
    else if(storage==512)
    {
        extraSsdCost.innerText=100;
    }
    else 
    {
        extraSsdCost.innerText=180;
    }
    calculation();
}


// delivery selection function 
function updateDeliveryCharge(isFree)
{
    const deliveryCharge=  document.getElementById('delivery-charge');
    if(isFree)
    {
        deliveryCharge.innerText=0;
    }
    else
    {
        deliveryCharge.innerText=20;
    }
    calculation();
}

// Calculation of grandTotal
function calculation()
{
    const bestPrice=parseInt(document.getElementById('best-price').innerText);
    const extraMemoryCost=parseInt(document.getElementById('extra-memory-cost').innerText);
    const ExtraStorageCost=parseInt(document.getElementById('extra-ssd-cost').innerText);
    const deliveryCharge=parseInt(document.getElementById('delivery-charge').innerText);
    const totalPrice=document.getElementById('total-price');
    const finalTotal=document.getElementById('final-total');
    
    totalPrice.innerText=bestPrice + extraMemoryCost + ExtraStorageCost + deliveryCharge;
    finalTotal.innerText=totalPrice.innerText;
}

// cupon discount
function finalTotal()
{
    const cuponField=document.getElementById('cupon-field');

    if(cuponField.value=='stevekaku')
    {        
        const finalTotal=document.getElementById('final-total');
        const totalPrice=parseInt(document.getElementById('total-price').innerText);
        const discount=totalPrice*0.2;
        finalTotal.innerText=totalPrice-discount;
    }
    cuponField.value='';
}

//handel  Memory selection events
document.getElementById('memory-8GB').addEventListener('click',function(){
    updateExtraMemoryCost(false);
})

document.getElementById('memory-16GB').addEventListener('click',function()
{
    updateExtraMemoryCost(true);
})


// handel storage selection events
document.getElementById('ssd-256GB').addEventListener('click',function(){
    updateExtraStorageCost(256);
    
})
document.getElementById('ssd-512GB').addEventListener('click',function(){
    updateExtraStorageCost(512);
   
})
document.getElementById('ssd-1TB').addEventListener('click',function(){
    updateExtraStorageCost(1000);
})

// handel delivery selection events
document.getElementById('free-delivery').addEventListener('click',function(){
    updateDeliveryCharge(true);
})
document.getElementById('premium-delivery').addEventListener('click',function(){
    updateDeliveryCharge(false);
})

// handel cupon events
document.getElementById('cupon-apply').addEventListener('click',function(){
    
    finalTotal();
})