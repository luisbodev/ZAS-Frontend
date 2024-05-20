'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomMenu from '@/components/BottomMenu';
import Image from 'next/image';
import TopNav from '@/components/TopNav';
import TextInput from '@/components/TextInput';


export default function Home() {
    const router = useRouter(); // Use useRouter hook

    return (
        <div className="flex flex-col flex-grow min-h-screen">
            <TopNav type='go-back' goto='home' />


            <div className='px-4 mt-8'>
                <div className="h-[52px] text-colors-3 text-base font-bold font-['Poppins'] leading-[52px] ps-2">Mis Colectas</div>
                <div className="w-[131px] h-1 bg-colors-7 rounded-[50px] shadow ps-2" />

                <div class="mt-4">
                    <div className='w-full h-[189px] bg-colors-7 rounded-lg p-4'>
                        <div class=" text-colors-3 text-xl font-bold font-['Poppins'] leading-[18.68px] tracking-tight">Salidita al Tunco 🐷</div>
                        <div class=" text-colors-3 text-[15px] font-light font-['Poppins'] leading-[14.01px] tracking-tigh mt-2">Monto colectado</div>
                        <div class=" text-colors-3 text-[40px] font-bold font-['Poppins'] leading-[37.36px] tracking-wide mt-4">$50.94</div>
                        <div class="w-[125px] bg-colors-3 text-white text-center rounded-[20px] p-1 mt-6">Participantes</div>
                    </div>
                </div>

            </div>


            <BottomMenu />
        </div>
    );
}
