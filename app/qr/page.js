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
                <div className="h-[52px] text-colors-1 text-base font-bold font-['Poppins'] leading-[52px] ps-2">QR</div>
                <div className="w-[131px] h-1 bg-colors-5 rounded-[50px] shadow ps-2" />

                <div className='flex flex-grow items-center justify-center w-full mt-[100px]'>
                    <Image
                        src="/icons/scan.svg" // Path to your image in the public directory
                        alt="Description of the image"
                        width={273} // Set the desired width of the image
                        height={278} // Set the desired height of the image
                    />
                </div>

            </div>





            <BottomMenu />
        </div>
    );
}
