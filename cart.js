function addItem(cart,item,quantity){
    const existingItem = cart.find(i => i.item === item);

  if (existingItem) {
    existingItem.quantity += quantity;   // if already there, just increase
  } else {
    cart.push({ item, quantity });       // else add new
  }

  return cart;

}

function removeItem(cart,item){
    const index = cart.findIndex(i => i.item === item);

  if (index !== -1) {
    cart.splice(index, 1);   // remove the item at that position
  }

  return cart;

}

function getTotalItems(cart){
    
let total = 0;
  for (let i of cart) {
    total += i.quantity;
  }
  return total;
}

module.exports = {addItem,removeItem,getTotalItems};
