'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomMenu from '@/components/BottomMenu';
import Image from 'next/image';

import TopNav from '@/components/TopNav';

export default function Home() {
    const router = useRouter(); // Use useRouter hook
    const chipData = ['Carro Nuevo'];
    const [selectedChip, setSelectedChip] = useState(chipData[0]);

    const handleChipClick = (chip) => {
        setSelectedChip(chip);
    };

    return (
        <div className="flex flex-col flex-grow min-h-screen pb-16">
            <TopNav />



            <div className='w-full px-4 mt-8'>
                <div className="h-[52px] text-colors-1 text-base font-bold font-['Poppins'] leading-[52px] ps-2">Enviar</div>
                <div className="w-[131px] h-1 bg-colors-5 rounded-[50px] shadow ps-2" />

                <div className='bg-colors-1 rounded-full h-[56px] mt-4 flex items-center px-8'>
                    <Image
                        src="/icons/in-house.svg" // Path to your image in the public directory
                        alt="Description of the image"
                        width={24} // Set the desired width of the image
                        height={24} // Set the desired height of the image
                    />
                    <div class=" text-white text-[15px] font-medium font-['Poppins'] pt-1 ps-2">In House</div>
                </div>
                
                <div className='bg-colors-1 rounded-full h-[56px] mt-4 flex items-center px-8'>
                    <Image
                        src="/icons/wallet.svg" // Path to your image in the public directory
                        alt="Description of the image"
                        width={24} // Set the desired width of the image
                        height={24} // Set the desired height of the image
                    />
                    <div class=" text-white text-[15px] font-medium font-['Poppins'] pt-1 ps-2">UNI 365</div>
                </div>

            </div>





            <BottomMenu />
        </div>
    );
}
