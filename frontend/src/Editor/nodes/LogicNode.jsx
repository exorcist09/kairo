import React, { useState } from 'react';

const ConditionNode = ({ data, onChange }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  const handleChange = (e) => {
    const val = e.target.value;
    setCondition(val);
    if (onChange) onChange({ ...data, condition: val });
  };

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-md w-64 text-white font-sans shadow-lg flex flex-col items-center">
      <h3 className="text-center text-lg font-semibold mb-4">Condition Node</h3>

      <input
        type="text"
        value={condition}
        onChange={handleChange}
        placeholder="Condition expression"
        className="w-full p-2 rounded-md text-black focus:outline-none"
      />

      <small className="text-gray-400 mt-3 text-center">
        Enter condition expression (e.g., paymentStatus === 'success')
      </small>
    </div>
  );
};

export default ConditionNode;
