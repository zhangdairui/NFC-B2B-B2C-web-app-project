var shipping = 15.00;
var fadeTime = 300;

// Cart Information Prepare ： id (not display), imgUrl, productName, price, count, totalItemPrice
var cartProductInfo = [{
        id: 1234564876,
        imgUrl: 'images/item-1.jpg',
        productName: 'product name',
        price: 50,
        count: 1,
        totalItemPrice: 50
    },
    {
        id: 1234564876,
        imgUrl: 'images/item-2.jpg',
        productName: 'product name',
        price: 199,
        count: 1,
        totalItemPrice: 199
    },
    {
        id: 1234564876,
        imgUrl: 'images/item-3.jpg',
        productName: 'product name',
        price: 199,
        count: 1,
        totalItemPrice: 199
    },
    {
        id: 1234564876,
        imgUrl: 'images/item-4.jpg',
        productName: 'product name',
        price: 199,
        count: 1,
        totalItemPrice: 199
    }
]

// Make the information display to the cart.html

var cartTable = $('#cartProductInfo');
for (var i = 1; i <= cartProductInfo.length; i++) {
    var item = cartProductInfo[i - 1]
    cartTable.append(
        '<tr> ' +

        '<td class="Product" name="Product">' +
        // Delete button
        '<a href="#" class="btn-remove ti-close" id="remove-product" ></a>' +
        // Product img
        '<div class="img-holder">' +
        '<img src="' + item.imgUrl + '" alt="image description" class="img-resposnive">' +
        '</div>' +
        // Delete button
        '<span class="descr-wrap">' + item.productName + '</span>' +
        '</td>' +

        '<td class="price"><span>$</span><span class="single-price">' + item.price + '<span></td>' +

        '<td class="Quantity"><input type="number" class="form-control text-center" min="1" value="1"></td>' +

        '<td class="Total"><span>$</span><span class="line-price">' + item.totalItemPrice + '</span> </td>' +

        '</tr>')
}





// Delete function

$(function() {

    $('.ti-close').click(function() { // when click the delete button...

        $(this).parent().parent().closest('tr').remove(); //delete function
        recalculateCart(); //update price
    });

});


// Recalculate cart 
function recalculateCart() {
    var subtotal = 0;

    /* Sum up row totals */
    $('.line-price').each(function() {
        subtotal += parseFloat($(this).text());
    });

    /* Calculate totals */
    var total = subtotal + shipping;

    /* Update totals display */
    $('.price').fadeOut(fadeTime, function() {
        $('.cart-subtotal').html(subtotal.toFixed(2));

        $('.cart-all-total').html(total.toFixed(2));

        $('.price').fadeIn(fadeTime);

    });
}


// update cart page

function updateQuantity(quantityInput) {

    var productRow = $(quantityInput).parent().parent();
    var singlePrice = parseFloat(productRow.find('.single-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = singlePrice * quantity;



    /* Update line price display and recalc cart totals */
    productRow.find('.line-price').each(function() {
        $(this).fadeOut(fadeTime, function() {

            $(this).text(linePrice);

            recalculateCart(); // recalculate total price of the cart
            $(this).fadeIn(fadeTime);
        });
    });
}



// Change line-total price by counting
$('.Quantity input').change(function() {
    updateQuantity(this);
});