// components/LoadingScreen.js

import Image from 'next/image';

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">

            <div className="flex flex-col justify-center items-center">
                <Image
                    src="/zasy/01.png" // Path to your image in the public directory
                    alt="Description of the image"
                    width={300} // Set the desired width of the image
                    height={300} // Set the desired height of the image
                />
                <div className="flex space-x-2 animate-bounce">
                    <div className="w-4 h-4 bg-colors-1 rounded-full"></div>
                    <div className="w-4 h-4 bg-colors-3 rounded-full"></div>
                    <div className="w-4 h-4 bg-colors-2 rounded-full"></div>
                </div>
                <div class="w-72 h-5 text-center text-sky-700 text-sm font-semibold font-['Poppins'] mt-4">Recuerda que....</div>
                <div class="w-72 text-center text-sky-700 text-sm font-normal font-['Poppins']">hacer tu reto diario te ayudará a completar tus metas</div>
            </div>
        </div>
    );
}
