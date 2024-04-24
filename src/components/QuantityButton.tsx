interface QuantityButtonProps {
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = (props) => {
  return (
    <div className="quantity-button ">
      <button onClick={props.handleDecrement} className="decrement">
        -
      </button>
      <span>{props.quantity}</span>
      <button onClick={props.handleIncrement} className="increment">
        +
      </button>
    </div>
  );
};

export default QuantityButton;
