'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomMenu from '@/components/BottomMenu';
import Image from 'next/image';
import TopNav from '@/components/TopNav';

export default function Home() {
    const router = useRouter(); // Use useRouter hook
    const chipData = ['Carro', 'Viaje'];
    const [selectedChip, setSelectedChip] = useState(chipData[0]);

    const handleChipClick = (chip) => {
        setSelectedChip(chip);
    };

    return (
        <div className="flex flex-col flex-grow min-h-screen">
            <TopNav type='go-back' goto='home' />

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
                    onClick={() => router.push('/metas-add')}
                >
                    <Image
                        src="/icons/plus.svg" // Path to your image in the public directory
                        alt="Description of the image"
                        width={24} // Set the desired width of the image
                        height={24} // Set the desired height of the image
                    />
                </button>
            </div>

            <div className="flex-grow pt-4">
                {/* Content based on selected chip */}
                {selectedChip == 'Carro' && (
                    <div className='pb-8'>
                        <div class="px-4">
                            <div class=" w-full bg-colors-1 rounded-lg shadow p-4">
                                <div className=''>
                                <div class="text-white text-sm font-normal font-['Poppins'] leading-10">Carro Nuevo</div>
                                    <div class="text-white text-sm font-normal font-['Poppins'] leading-10 mt-2">Meta</div>
                                    <div class="w-28 h-12"><span class="text-white text-xl font-['Poppins']">$</span><span class="text-white text-xl font-medium font-['Poppins'] leading-10">1,200.00</span></div>

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
                        </div>

                        <div className="flex mt-4 justify-between overflow-x-auto space-x-4 py-4 px-4">

                            <Image
                                src="/metas/01.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='flex-none'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/02.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='flex-none'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/03.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='flex-none grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/10.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='flex-none grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                        </div>
                    </div>
                )}
                {selectedChip == 'Viaje' && (
                    <div className='pb-8'>
                        <div class="px-4">
                            <div class=" w-full bg-colors-1 rounded-lg shadow p-4">
                                <div className=''>
                                    <div class="text-white text-sm font-normal font-['Poppins'] leading-10">Viaje a buenos aires</div>
                                    <div class="text-white text-sm font-normal font-['Poppins'] leading-10 mt-2">Meta</div>
                                    <div class="w-28 h-12"><span class="text-white text-xl font-['Poppins']">$</span><span class="text-white text-xl font-medium font-['Poppins'] leading-10">765.00</span></div>
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
                                        <div class="w-1/6 h-[26px] left-0 top-[17px] absolute bg-zinc-800 rounded"></div>
                                        <div class="left-[7px] top-2 absolute text-center text-white text-xs font-light font-['Poppins'] leading-10">$45.00</div>
                                    </div>
                                    <div class="w-full h-[16px]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-4 justify-between overflow-x-auto space-x-4 py-4 px-4">

                            <Image
                                src="/metas/01.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='flex-none'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/02.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='flex-none grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/03.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='flex-none grayscale'
                                width={112} // Set the desired width of the image
                                height={113} // Set the desired height of the image
                            />
                            <Image
                                src="/metas/10.png" // Path to your image in the public directory
                                alt="Description of the image"
                                className='flex-none grayscale'
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
