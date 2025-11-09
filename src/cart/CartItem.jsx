import CartQuantity from "./CartQuantity";

export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cartplant">
      <div>
        {item.image} {item.name}
      </div>
      <CartQuantity
        item={item}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
    </li>
  );
}
