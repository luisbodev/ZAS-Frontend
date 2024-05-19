'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomMenu from '@/components/BottomMenu';
import Image from 'next/image';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export default function Home() {
    const router = useRouter(); // Use useRouter hook
    const chipData = ['Carro Nuevo'];
    const [selectedChip, setSelectedChip] = useState(chipData[0]);

    ChartJS.register(ArcElement, Tooltip, Legend);

    const navigateToLogin = () => {
        router.push('/'); // Navigate to the register page
    };

    const handleChipClick = (chip) => {
        setSelectedChip(chip);
    };

    return (
        <div className="flex flex-col flex-grow min-h-screen">
            <div class="w-full h-40 bg-colors-1 rounded-bl-3xl rounded-br-3xl shadow p-8">
                <div class=" text-white text-xs font-medium font-['Poppins'] leading-10">Bienvenido</div>
                <div className='flex justify-between'>
                    <div class="flex items-center px-2 w-48 h-16 bg-blue-100 rounded-full shadow">
                        <Image
                            src="/icons/user.svg" // Path to your image in the public directory
                            alt="Description of the image"
                            width={46} // Set the desired width of the image
                            height={46} // Set the desired height of the image
                        />
                        <div class="text-colors-1 text-base font-medium font-['Poppins'] leading-10 ps-2">¡Hol@, Majo!</div>
                    </div>

                    <div className='flex'>
                        <button
                            className='pe-2'
                            onClick={() => router.push('/home')}
                        >
                            <Image
                                src="/icons/logros.svg" // Path to your image in the public directory
                                alt="Description of the image"
                                width={24} // Set the desired width of the image
                                height={24} // Set the desired height of the image
                            />
                        </button>
                        <button
                            onClick={() => router.push('/home')}
                        >
                            <Image
                                src="/icons/bell.svg" // Path to your image in the public directory
                                alt="Description of the image"
                                width={24} // Set the desired width of the image
                                height={24} // Set the desired height of the image
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex overflow-x-auto space-x-4 py-4 px-4">
                {chipData.map((chip, index) => (
                    <button
                        key={index}
                        className={`flex-none px-4 py-2 rounded-full cursor-pointer ${selectedChip === chip ? 'bg-colors-5 text-colors-1' : 'text-black border-2 border-colors-5'}`}
                        onClick={() => handleChipClick(chip)}
                    >
                        {chip}
                    </button>
                ))}
                <button
                    className={`flex-none px-4 py-2 rounded-full cursor-pointer text-black border-2 border-colors-5`}
                >
                    <Image
                        src="/icons/plus.svg" // Path to your image in the public directory
                        alt="Description of the image"
                        width={24} // Set the desired width of the image
                        height={24} // Set the desired height of the image
                    />
                </button>
            </div>

            <div className="flex-grow px-4 pt-4">
                {/* Content based on selected chip */}
                {selectedChip == 'Carro Nuevo' && (
                    <div className='pb-8'>
                        <div class=" w-full bg-colors-1 rounded-lg shadow p-4">
                            <div className=''>
                                <div class="text-white text-sm font-normal font-['Poppins'] leading-10">Meta</div>
                                <div class="w-28 h-12"><span class="text-white text-xl font-['Poppins'] leading-10">$</span><span class="text-white text-xl font-medium font-['Poppins'] leading-10"> 1,200.00</span></div>
                                <div className='flex justify-end'>
                                    <Image
                                        src="/icons/flag.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={24} // Set the desired width of the image
                                        height={24} // Set the desired height of the image
                                    />
                                </div>
                                <div class="w-full h-[26px] relative">
                                    <div class="w-full h-[26px] left-0 top-[17px] absolute bg-blue-100 rounded"></div>
                                    <div class="w-full h-[26px] left-0 top-[17px] absolute bg-blue-100 rounded"></div>
                                    <div class="w-1/4 h-[26px] left-0 top-[17px] absolute bg-zinc-800 rounded"></div>
                                    <div class="left-[7px] top-2 absolute text-center text-white text-xs font-light font-['Poppins'] leading-10">$150.00</div>
                                </div>
                                <div class="w-full h-[16px]"></div>
                            </div>

                        </div>

                        <div className='flex justify-between mt-4'>
                            <Image
                                src="/metas/01.png" // Path to your image in the public directory
                                alt="Description of the image"
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/02.png" // Path to your image in the public directory
                                alt="Description of the image"
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/03.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                        </div>


                        <div className="w-[75px] h-[52px] text-colors-1 text-base font-bold font-['Poppins'] leading-[52px] ps-2">Retos</div>
                        <div className="w-[131px] h-1 bg-colors-5 rounded-[50px] shadow ps-2" />

                        <div className='flex justify-between mt-4'>
                            <Image
                                src="/metas/04.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/05.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/06.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                        </div>
                        <div className='flex justify-between mt-4'>
                            <Image
                                src="/metas/07.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/08.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/09.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                        </div>

                    </div>
                )}


            </div>


            <BottomMenu />
        </div>
    );
}
