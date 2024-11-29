function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.item-quantity').value);
        total += price * quantity;
    });

    document.querySelector('.cart-total h3').textContent = `Total: $${total.toFixed(2)}`;
}

function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotal();
}