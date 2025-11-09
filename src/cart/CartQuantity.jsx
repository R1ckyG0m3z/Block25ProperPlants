export default function CartQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div className="cartplantquantity">
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
