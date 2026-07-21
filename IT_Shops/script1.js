
$(document).ready(function () {

    $('.addToCart').click(function (e) {

        e.preventDefault();

        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');

        console.log(id, name, price);

        let items = {
            id: id,
            name: name,
            price: price,
            qty: 1
        };

        // Get data from Local Storage
        let itemString = localStorage.getItem('itShop');

        let itemArray;

        if (itemString == null) {
            itemArray = [];
        } else {
            itemArray = JSON.parse(itemString);
        }

        // Check if product already exists
        let status = false;

        $.each(itemArray, function (i, v) {

            if (v.id == id) {
                v.qty++;
                status = true;
                return false; // stop looping
            }

        });

        // Add new product if it doesn't exist
        if (status == false) {
            itemArray.push(items);
        }

        // Save back to Local Storage
        let itemData = JSON.stringify(itemArray);

        localStorage.setItem('itShop', itemData);

        console.log(itemArray);

        // Update cart count
        $('.cart span').text(itemArray.length);

    });

    // Show cart count when page loads
    let itemString = localStorage.getItem('itShop');

    if (itemString != null) {
        let itemArray = JSON.parse(itemString);
        $('.cart span').text(itemArray.length);
    }

});