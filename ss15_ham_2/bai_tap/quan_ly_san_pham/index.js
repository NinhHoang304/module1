// Display list product
let arrayProduct = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Note 4', 'Apple Iphone 6S'];

function displayList() {
    let data = "";
    for (let i = 0; i < arrayProduct.length; i++) {
        data += "<tr>";
        data += "<td>" + arrayProduct[i] + "</td>";
        data += "<td><input type='button' value='Edit' onclick='edit(" + i + ")'/></td>";
        data += "<td><input type='button' value='Delete' onclick='del(" + i + ")'/></td>";
        data += "</tr>";
    }
    document.getElementById('list').innerHTML = data;
}

displayList();

// Add product
function addProduct() {
    let getValue = document.getElementById('txtProduct').value;
    if (getValue !== '') {
        arrayProduct.push(getValue);
    }
    displayList();
}

addProduct();

// Edit product
function edit(i) {
    let editValue = prompt('Enter a product');
    arrayProduct.splice(i, 1, editValue);
    displayList();
}

// Delete product
function del(i) {
    arrayProduct.splice(i, 1, );
    displayList();
}

