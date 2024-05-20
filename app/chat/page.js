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

            <div className='px-4 mt-8'>
                <div className="h-[52px] text-colors-1 text-base font-bold font-['Poppins'] leading-[52px] ps-2">Chat Bot</div>
                <div className="w-[131px] h-1 bg-colors-5 rounded-[50px] shadow ps-2" />
                
                <div className='w-full flex justify-end mt-4'>
                    <div class="w-[169.90px] h-[54.94px] px-[24.95px] py-[14.97px] bg-colors-5 rounded-tl-[29.94px] rounded-bl-[29.94px] rounded-br-[29.94px] shadow"></div>
                </div>
                <div className='w-full flex justify-start mt-4'>
                    <div class="w-[124.90px] h-[54.94px] px-[24.95px] py-[14.97px] bg-colors-6 rounded-tr-[29.94px] rounded-bl-[29.94px] rounded-br-[29.94px] shadow"></div>
                </div>
                <div className='w-full flex justify-end mt-4'>
                    <div class="w-[200.90px] h-[54.94px] px-[24.95px] py-[14.97px] bg-colors-5 rounded-tl-[29.94px] rounded-bl-[29.94px] rounded-br-[29.94px] shadow"></div>
                </div>
                <div className='w-full flex justify-start mt-4'>
                    <div class="w-[175px] h-[54.94px] px-[24.95px] py-[14.97px] bg-colors-6 rounded-tr-[29.94px] rounded-bl-[29.94px] rounded-br-[29.94px] shadow"></div>
                </div>
                <div className='w-full flex justify-start mt-4'>
                    <div class="w-[100px] h-[54.94px] px-[24.95px] py-[14.97px] bg-colors-6 rounded-tr-[29.94px] rounded-bl-[29.94px] rounded-br-[29.94px] shadow"></div>
                </div>
                <div className='w-full flex justify-end mt-4'>
                    <div class="w-[169.90px] h-[54.94px] px-[24.95px] py-[14.97px] bg-colors-5 rounded-tl-[29.94px] rounded-bl-[29.94px] rounded-br-[29.94px] shadow"></div>
                </div>

            </div>





            <BottomMenu />
        </div>
    );
}
