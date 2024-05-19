// components/TextInput.js
import PropTypes from 'prop-types';

export default function TextInput({ id, type = 'text', label, value, onChange }) {
  return (
    <div className="mb-4 text-colors-1">
      <label htmlFor={id} className="block  mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-colors-1 rounded-lg"
        required
      />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
