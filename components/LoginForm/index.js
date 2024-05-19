// components/LoginForm.js
import { useState } from 'react';
import TextInput from '@/components/TextInput';
import FaceIDButton from '@/components/FaceIDButton';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Use useRouter hook


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Email:', email, 'Password:', password);
        router.push('/home');
    };

    const handleFaceIDLogin = () => {
        // Simulate FaceID login logic here
        console.log('FaceID login triggered');
        router.push('/home');
    };

    const navigateToRegister = () => {
        router.push('/register');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 mx-4 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-colors-1">Login</h2>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        id="email"
                        type="email"
                        label="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        id="password"
                        type="password"
                        label="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='mb-4'>
                        <FaceIDButton onClick={handleFaceIDLogin} />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-colors-1 text-white p-3 rounded-lg"
                        onClick={handleFaceIDLogin}
                    >
                        Iniciar Sesión
                    </button>
                </form>
                <div className="text-center mt-4">
                    <hr className="my-4" />
                    <p className="text-gray-600">
                        No tienes una cuenta?{' '}
                        <button
                            onClick={navigateToRegister}
                            className="text-blue-500 hover:underline"
                        >
                            Registrarse
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
