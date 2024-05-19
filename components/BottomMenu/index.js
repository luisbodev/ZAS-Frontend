// components/BottomMenu.js
"use client"

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BottomMenu() {
    const router = useRouter();

    return (
        <div className="fixed bottom-0 left-0 right-0">

            <div class="w-full h-14 left-0 top-0 flex justify-around bg-colors-5 rounded-tl-3xl rounded-tr-3xl pt-2">
                <button class="flex flex-col justify-center align-center" onClick={() => router.push('/home')}>
                    <div className='flex w-full justify-center align-center'>
                        <Image
                            src="/icons/home.svg" // Path to your image in the public directory
                            alt="Description of the image"
                            width={24} // Set the desired width of the image
                            height={24} // Set the desired height of the image
                        />
                    </div>
                    <div className='flex w-full justify-center align-center'><span className='pt-1 text-black text-xs font-semibold text-center'>Home</span></div>
                </button>
                <button class="flex flex-col justify-center align-center" onClick={() => router.push('/home')}>
                    <div className='flex w-full justify-center align-center'>
                        <Image
                            src="/icons/qr.svg" // Path to your image in the public directory
                            alt="Description of the image"
                            width={24} // Set the desired width of the image
                            height={24} // Set the desired height of the image
                        />
                    </div>
                    <div className='flex w-full justify-center align-center'><span className='pt-1 text-black text-xs font-semibold text-center'>Qr</span></div>
                </button>
                <button class="flex flex-col justify-center align-center" onClick={() => router.push('/home')}>
                    <div className='flex w-full justify-center align-center'>
                        <Image
                            src="/icons/send.svg" // Path to your image in the public directory
                            alt="Description of the image"
                            width={24} // Set the desired width of the image
                            height={24} // Set the desired height of the image
                        />
                    </div>
                    <div className="flex w-full justify-center align-center"><span className='text-black text-xs font-semibold text-center'>Enviar</span></div>
                </button>
                <button class="flex flex-col justify-center align-center" onClick={() => router.push('/home')}>
                    <div className='flex w-full justify-center align-center'>
                        <Image
                            src="/icons/chat.svg" // Path to your image in the public directory
                            alt="Description of the image"
                            width={24} // Set the desired width of the image
                            height={24} // Set the desired height of the image
                        />
                    </div>
                    <div className='flex w-full justify-center align-center'><span className='pt-1 text-black text-xs font-semibold text-center'>Ayuda</span></div>
                </button>
            </div>
        </div>
    );
}
