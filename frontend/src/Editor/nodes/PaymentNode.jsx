import { Position, Handle } from "@xyflow/react";
import { X } from "lucide-react";
import React, { useState } from "react";

const PaymentNode = ({ data, onChange }) => {
  const [amount, setAmount] = useState(data?.amount || "");
  const [method, setMethod] = useState(data?.method || "card");
  const [delay, setDelay] = useState(data?.delay || "");
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    onChange?.({ ...data, amount: value, method, delay });
  };

  const handleMethodChange = (e) => {
    const value = e.target.value;
    setMethod(value);
    onChange?.({ ...data, amount, method: value, delay });
  };

  const handleDelayChange = (e) => {
    const value = e.target.value;
    setDelay(value);
    onChange?.({ ...data, amount, method, delay: value });
  };

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-md w-56 text-white font-sans shadow-lg flex flex-col items-center relative">
      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="absolute top-1 right-1 border rounded-full flex items-center justify-center p-1 bg-gray-600 border-gray-600 text-white hover:text-red-400"
        title="Delete Node"
      >
        <X size={18} />
      </button>

      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-white rounded-full"
      />
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-white rounded-full"
      />

      {/* Sending outputs (sources) */}
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-white rounded-full"
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-white rounded-full"
      />
      <h3 className="text-center text-lg font-semibold mb-4">Payment Node</h3>

      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Amount"
        className="w-full p-2 rounded-md text-black focus:outline-none mb-3"
        min="0"
        required
      />

      <select
        value={method}
        onChange={handleMethodChange}
        className="w-full p-2 rounded-md text-black focus:outline-none mb-3"
      >
        <option value="card">Card</option>
        <option value="upi">UPI</option>
        <option value="netbanking">Net Banking</option>
      </select>

      <input
        type="text"
        value={delay}
        onChange={handleDelayChange}
        placeholder="Delay after email (e.g., 2h, 30m)"
        className="w-full p-2 rounded-md text-black focus:outline-none"
      />

      <small className="text-gray-400 mt-3 text-center">
        Enter payment details and delay after email.
      </small>
    </div>
  );
};

export default PaymentNode;
