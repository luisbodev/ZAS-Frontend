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


            <div className='px-4 mt-8 pb-16'>
                <div className="h-[52px] text-colors-1 text-base font-bold font-['Poppins'] leading-[52px] ps-2">Retos</div>
                <div className="w-[131px] h-1 bg-colors-5 rounded-[50px] shadow ps-2" />
                <div class=" text-colors-1 text-xs font-normal font-['Poppins'] leading-none mt-4">En este espacio encontrarás tus retos mensuales, los cuales te proporcionarán beneficios al completarlos.</div>


                <div className='flex justify-between mt-4'>
                    <Image
                        src="/metas/09.png" // Path to your image in the public directory
                        alt="Description of the image"
                        className=''
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
                        src="/metas/04.png" // Path to your image in the public directory
                        alt="Description of the image"
                        className='grayscale'
                        width={112} // Set the desired width of the image
                        height={113} // Set the desired height of the image
                    />
                </div>

                <div className='flex flex-col justify-center items-center w-full h-[197px] bg-colors-5 rounded-lg'>
                    <div class="w-full text-center text-sky-700 text-2xl font-bold font-['Poppins'] leading-tight">¡Parqueo!</div>
                    <div class="text-center text-sky-700 text-sm font-normal font-['Poppins'] leading-tight mt-4 px-12">Al pagar tu parqueo dario durante 20 días te retornaremos un % a tu cuenta bancaría.</div>

                </div>


            </div>


            <BottomMenu />
        </div>
    );
}
