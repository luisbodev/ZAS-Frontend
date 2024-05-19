// components/FaceIDButton.js
import PropTypes from 'prop-types';

export default function FaceIDButton({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center justify-center w-full bg-colors-3 text-white p-3 rounded-lg mt-4"
        >
            Iniciar sesión con FaceID
        </button>
    );
}

FaceIDButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
