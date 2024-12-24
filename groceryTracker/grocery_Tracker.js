let grocery1;
let grocery2;
let grocery3;
let grocery4;

function calculateTotal() {
    let total = 0;
    let grocery1 = parseFloat(document.getElementById('item_1').value);
    let grocery2 = parseFloat(document.getElementById('item_2').value);
    let grocery3 = parseFloat(document.getElementById('item_3').value);
    let grocery4 = parseFloat(document.getElementById('item_4').value);

    total = grocery1 + grocery2 + grocery3 + grocery4;
    document.getElementById('total').innerText = `The total cost of your groceries is: $${total.toFixed(2)}`;   
}