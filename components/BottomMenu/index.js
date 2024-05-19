// components/BottomMenu.js
"use client"

import { useRouter } from 'next/navigation';

export default function BottomMenu() {
    const router = useRouter();

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black shadow-lg">
            <div className="flex justify-around py-3">
                <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => router.push('/')}
                >
                    Home
                </button>
                <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => router.push('/profile')}
                >
                    Profile
                </button>
                <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => router.push('/settings')}
                >
                    Settings
                </button>
            </div>
        </div>
    );
}
