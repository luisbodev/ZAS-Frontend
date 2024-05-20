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
            <TopNav type='go-back' goto='metas' />


            <div className='px-4 mt-8'>
                <div className="h-[52px] text-colors-1 text-base font-bold font-['Poppins'] leading-[52px] ps-2">Agregar Metas</div>
                <div className="w-[131px] h-1 bg-colors-5 rounded-[50px] shadow ps-2" />

                <div class="mt-4">
                    <TextInput
                        id="Nombre"
                        type="text"
                        label="Nombre"
                    />
                </div>
                <div class="mt-4">
                    <TextInput
                        id="Duración"
                        type="text"
                        label="Duración"
                    />
                </div>
                <div class="mt-4">
                    <TextInput
                        id="Monto"
                        type="text"
                        label="Monto"
                    />
                </div>
                <button
                    className="w-full bg-colors-1 text-white p-3 rounded-lg"
                    onClick={() => {router.push('/metas');}}
                >
                    Guardar Meta
                </button>

            </div>


            <BottomMenu />
        </div>
    );
}
