// components/TextInput.js
import PropTypes from 'prop-types';

export default function TextInput({ id, type = 'text', label, value, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        required
      />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
