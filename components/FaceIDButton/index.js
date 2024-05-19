// components/FaceIDButton.js
import PropTypes from 'prop-types';

export default function FaceIDButton({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center justify-center w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300 mt-4"
        >
            <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 19.121A3 3 0 018 18h8a3 3 0 012.879 1.121M12 10v6m0 0V4m0 6H7m5 0h5M21 12v7a3 3 0 01-3 3h-3m-4 0H6a3 3 0 01-3-3v-7a3 3 0 013-3h3m4 0h3a3 3 0 013 3z"
                />
            </svg>
            Login with FaceID
        </button>
    );
}

FaceIDButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
