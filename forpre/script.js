let cartCountElement = document.getElementById("cartCount");
let addToCartBtn = document.getElementById("addToCartBtn");
let cardAddButtons = document.querySelectorAll(".card-add-btn");

let likeBtn = document.getElementById("likeBtn");
let heartIcon = document.getElementById("heartIcon");

let count = 0;

// Add to Cart နှိပ်လျှင် Alert Box ပြပေးမည့် Function
function updateCart() {
    count = count + 1;
    if (cartCountElement) {
        cartCountElement.innerText = count;
    }
    alert("Item successfully added to cart! (စျေးဝယ်ခြင်းထဲသို့ ပစ္စည်းထည့်ပြီးပါပြီ)");
}

// ၁။ Main Hero Button
if (addToCartBtn) {
    addToCartBtn.addEventListener("click", updateCart);
}

// ၂။ Category Cards ၏ Buttons များ
cardAddButtons.forEach(function (button) {
    button.addEventListener("click", updateCart);
});

// Like Button Toggle
let isLiked = false;

if (likeBtn) {
    likeBtn.addEventListener("click", function () {
        if (!isLiked) {
            heartIcon.classList.remove("fa-regular", "fa-heart");
            heartIcon.classList.add("fa-solid", "fa-heart");
            isLiked = true;
        } else {
            heartIcon.classList.remove("fa-solid", "fa-heart");
            heartIcon.classList.add("fa-regular", "fa-heart");
            isLiked = false;
        }
    });
}