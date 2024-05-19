'use client'

import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter(); // Use useRouter hook

    const navigateToLogin = () => {
        router.push('/'); // Navigate to the register page
    };
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <div>Trabajo en Progreso</div>
            <div className='mt-4'>
                <button
                    onClick={navigateToLogin}
                    className="text-blue-500 hover:underline"
                >
                    Regresar al Login
                </button>
            </div>
        </div>
    );
}
