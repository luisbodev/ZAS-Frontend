'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomMenu from '@/components/BottomMenu';
import TopNav from '@/components/TopNav';
import Image from 'next/image';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export default function Home() {
    const router = useRouter(); // Use useRouter hook
    const chipData = ['Mi Cuenta', 'Tarjetas', 'Pagos', 'Gastos', 'Otros'];
    const [selectedChip, setSelectedChip] = useState(chipData[0]);

    ChartJS.register(ArcElement, Tooltip, Legend);

    const navigateToLogin = () => {
        router.push('/'); // Navigate to the register page
    };

    const handleChipClick = (chip) => {
        setSelectedChip(chip);
    };

    const dataChart = {
        labels: ['Comida', 'Educación', 'Transporte'],
        datasets: [
            {
                label: '$',
                data: [40.75, 10.25, 39.00],
                backgroundColor: [
                    '#0052B4',
                    '#4957FF',
                    '#D0E8FF',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,  // This hides the legend
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': $';
                        }
                        label += context.raw;
                        return label;
                    }
                }
            }
        }
    };

    return (
        <div className="flex flex-col flex-grow min-h-screen">

            <TopNav />

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
            </div>

            <div className="flex-grow pt-4">
                {/* Content based on selected chip */}
                {selectedChip == 'Mi Cuenta' && (
                    <div className='px-4 pb-16'>
                        <div class="flex w-full h-36 bg-colors-1 rounded-lg shadow p-4 overflow-hidden">
                            <div>
                                <button class="w-24 rounded-full bg-colors-5 text-colors-1 text-xs font-normal text-center p-1">Saldo actual</button>
                                <div class="w-28 mt-8 text-white text-xs font-light font-['Poppins']">Cuenta Corriente</div>
                                <span class="text-white text-xl font-['Poppins'] leading-10">$</span>
                                <span class="text-white text-xl font-medium font-['Poppins'] leading-10 ps-4"> 4,000.94</span>
                            </div>
                            <div class="w-28 flex-grow">
                                <Image
                                    src="/zasy/02.png" // Path to your image in the public directory
                                    alt="Description of the image"
                                    width={184} // Set the desired width of the image
                                    height={139} // Set the desired height of the image
                                />
                            </div>
                        </div>

                        <div class="flex justify-around items-end w-full h-16 bg-colors-5 rounded-lg shadow p-2 overflow-hidden mt-4">

                            <button class="flex flex-col justify-center align-end" onClick={() => router.push('/metas')}>
                                <div className='flex w-full justify-center align-center'>
                                    <Image
                                        src="/icons/goal.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={24} // Set the desired width of the image
                                        height={30} // Set the desired height of the image
                                    />
                                </div>
                                <div className='flex w-full justify-center align-end'><span className='pt-1 text-black text-xs font-semibold text-center'>Metas</span></div>
                            </button>
                            <button class="flex flex-col justify-center align-end" onClick={() => router.push('/retos')}>
                                <div className='flex w-full justify-center align-end'>
                                    <Image
                                        src="/icons/challenge.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={24} // Set the desired width of the image
                                        height={24} // Set the desired height of the image
                                    />
                                </div>
                                <div className='flex w-full justify-center align-center'><span className='pt-1 text-black text-xs font-semibold text-center'>Retos</span></div>
                            </button>
                            <button class="flex flex-col justify-center align-end" onClick={() => router.push('/')}>
                                <div className='flex w-full justify-center align-center'>
                                    <Image
                                        src="/icons/plus.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={24} // Set the desired width of the image
                                        height={25} // Set the desired height of the image
                                    />
                                </div>
                                <div className="flex w-full justify-center align-end"><span className='text-black text-xs font-semibold text-center'>Recarga</span></div>
                            </button>
                        </div>

                        <div class=" w-full bg-colors-1 rounded-lg shadow p-4 mt-4">
                            <div class="flex align-center">
                                <Image
                                    src="/icons/star.svg" // Path to your image in the public directory
                                    alt="Description of the image"
                                    width={42} // Set the desired width of the image
                                    height={42} // Set the desired height of the image
                                />
                                <div class="text-center text-white text-2xl font-normal font-['Poppins'] leading-10 ps-4">Carro Nuevo</div>
                            </div>
                            <div className='mt-8'>
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


                    </div>
                )}
                {selectedChip == 'Gastos' && (

                    <div className='px-4 mt-4 pb-16'>
                        <div class="flex border-b-2 border-colors-1 pb-8">
                            <div class="w-1/2">
                                <Doughnut data={dataChart} options={options} />
                            </div>
                            <div class="w-1/2 ps-4 pe-8 pt-4">
                                <div className='flex border-b-2 border-colors-5'>
                                    <Image
                                        src="/icons/food.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={24} // Set the desired width of the image
                                        height={24} // Set the desired height of the image
                                    />
                                    <span className="text-colors-1 text-sm font-normal font-['Poppins'] leading-[52px] ps-4">$40.75</span>
                                </div>
                                <div className='flex border-b-2 border-colors-5'>
                                    <Image
                                        src="/icons/education.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={24} // Set the desired width of the image
                                        height={24} // Set the desired height of the image
                                    />
                                    <span className="text-colors-1 text-sm font-normal font-['Poppins'] leading-[52px] ps-4">$10.25</span>
                                </div>
                                <div className='flex'>
                                    <Image
                                        src="/icons/car.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={24} // Set the desired width of the image
                                        height={24} // Set the desired height of the image
                                    />
                                    <span className="text-colors-1 text-sm font-normal font-['Poppins'] leading-[52px] ps-4">$39.00</span>
                                </div>
                            </div>

                        </div>
                        <div className='px-4'>
                            <div class="w-[97px] h-[34px] text-colors-1 text-sm font-bold font-['Poppins'] leading-[52px]">Movimientos</div>
                        </div>
                        <div className="w-full h-[222px] mt-4 bg-colors-1 rounded-[18px] px-8 py-4">
                            <div className='flex justify-between border-b-2 border-white pb-2'>
                                <div className='flex'>
                                    <Image
                                        src="/icons/spotify.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={32} // Set the desired width of the image
                                        height={32} // Set the desired height of the image
                                    />
                                    <div className="text-white text-[15px] font-bold font-['Poppins'] leading-[52px] ps-4">Spotify</div>
                                </div>
                                <div className="text-white text-2xl font-['Poppins'] leading-[52px]">$ 5.99</div>
                            </div>
                            <div className='flex justify-between border-b-2 border-white pb-2 pt-2'>
                                <div className='flex'>
                                    <Image
                                        src="/icons/hbo.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={32} // Set the desired width of the image
                                        height={32} // Set the desired height of the image
                                    />
                                    <div className="text-white text-[15px] font-bold font-['Poppins'] leading-[52px] ps-4">Streaming</div>
                                </div>
                                <div className="text-white text-2xl font-['Poppins'] leading-[52px]">$ 7.99</div>
                            </div>
                            <div className='flex justify-between pt-2'>
                                <div className='flex'>
                                    <Image
                                        src="/icons/macdonalds.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={32} // Set the desired width of the image
                                        height={32} // Set the desired height of the image
                                    />
                                    <div className="text-white text-[15px] font-bold font-['Poppins'] leading-[52px] ps-4">Mc</div>
                                </div>
                                <div className="text-white text-2xl font-['Poppins'] leading-[52px]">$ 14.65</div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedChip == 'Tarjetas' && (

                    <div>

                        <div className='flex justify-around'>
                            <div className="text-center text-colors-3 text-base font-bold font-['Poppins'] leading-[52px] border-b-2 border-colors-7">Física</div>
                            <div className="text-center text-colors-3 text-base font-bold font-['Poppins'] leading-[52px]">Digital</div>
                        </div>

                        <div className="flex overflow-x-auto space-x-4 py-4 px-4">
                            <div className='flex-none'>
                                <Image
                                    src="/card/card.png" // Path to your image in the public directory
                                    alt="Description of the image"
                                    width={315} // Set the desired width of the image
                                    height={184} // Set the desired width of the image
                                />

                            </div>
                            <div className='flex-none '>
                                <Image
                                    src="/card/card.png" // Path to your image in the public directory
                                    alt="Description of the image"
                                    width={315} // Set the desired width of the image
                                    height={184} // Set the desired width of the image
                                />

                            </div>
                        </div>

                        <div className='px-4'>
                            <div class="flex justify-around items-end w-full h-16 bg-colors-3 rounded-lg shadow p-2 overflow-hidden mt-4">
                                <button class="flex flex-col justify-center align-end" onClick={() => router.push('/home')}>
                                    <div className='flex w-full justify-center align-center'>
                                        <Image
                                            src="/icons/unlock.svg" // Path to your image in the public directory
                                            alt="Description of the image"
                                            width={25} // Set the desired width of the image
                                            height={20} // Set the desired height of the image
                                        />
                                    </div>
                                    <div className='flex w-full justify-center align-end'><span className='pt-1 text-white text-xs font-semibold text-center'>Abono</span></div>
                                </button>
                                <button class="flex flex-col justify-center align-end" onClick={() => router.push('/')}>
                                    <div className='flex w-full justify-center align-end'>
                                        <Image
                                            src="/icons/view.svg" // Path to your image in the public directory
                                            alt="Description of the image"
                                            width={30} // Set the desired width of the image
                                            height={20} // Set the desired height of the image
                                            className='text-white '
                                        />
                                    </div>
                                    <div className='flex w-full justify-center align-center'><span className='pt-1 text-white text-xs font-semibold text-center'>Ver</span></div>
                                </button>
                                <button class="flex flex-col justify-center align-end" onClick={() => router.push('/')}>
                                    <div className='flex w-full justify-center align-center'>
                                        <Image
                                            src="/icons/plus2.svg" // Path to your image in the public directory
                                            alt="Description of the image"
                                            width={30} // Set the desired width of the image
                                            height={20} // Set the desired height of the image
                                        />
                                    </div>
                                    <div className="flex w-full justify-center align-end"><span className='text-white text-xs font-semibold text-center'>Recarga</span></div>
                                </button>
                            </div>
                        </div>

                    </div>
                )}
                {selectedChip == 'Pagos' && (

                    <div className='px-4'>
                        <div className=" text-colors-1 text-base font-bold font-['Poppins'] leading-[30px]">Paga tus servicios</div>
                        <div className="w-[131px] h-1 bg-colors-5 rounded-[50px] shadow" />

                        <div className='mt-4'>
                            <button
                                className='w-full'
                                onClick={() => { router.push('/universidad'); }}
                            >
                                <div className="w-full h-[150px] flex bg-colors-6 rounded-[20px] shadow p-4">
                                    <div className='w-1/2 flex justify-center items-center'>
                                        <Image
                                            src="/icons/grad.svg" // Path to your image in the public directory
                                            alt="Description of the image"
                                            width={92} // Set the desired width of the image
                                            height={92} // Set the desired height of the image
                                        />
                                    </div>
                                    <div className='w-1/2 flex items-center'>
                                        <div>
                                            <span className="text-colors-1 text-base font-bold font-['Poppins'] mt-4">Universidad</span>
                                            <br />
                                            <span className="text-colors-1 text-base font-light font-['Poppins'] leading-normal mt-4">Mensualidad<br />Biblioteca<br />Parqueo <br /></span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className='mt-4'>
                            <div className="w-full h-[150px] flex bg-colors-6 rounded-[20px] shadow p-4">
                                <div className='w-1/2 flex justify-center items-center'>
                                    <Image
                                        src="/icons/poll.svg" // Path to your image in the public directory
                                        alt="Description of the image"
                                        width={92} // Set the desired width of the image
                                        height={92} // Set the desired height of the image
                                    />
                                </div>
                                <div className='w-1/2 flex items-center'>
                                    <div>
                                        <span className="text-colors-1 text-base font-bold font-['Poppins'] mt-4">Facturas</span>
                                        <br />
                                        <span className="text-colors-1 text-base font-light font-['Poppins'] leading-normal mt-4">Residencia<br />Agua / Luz<br />Wifi <br />Plataformas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedChip == 'Otros' && (

                    <div className='px-4'>

                        <div className='flex gap-4 mt-4'>
                            <button
                                className='w-1/2'
                                onClick={() => { router.push('/colectas'); }}
                            >
                                <div className="w-full flex bg-colors-3 rounded-[20px] shadow p-4 h-[143px]">
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <Image
                                            src="/icons/colectas.svg" // Path to your image in the public directory
                                            alt="Description of the image"
                                            width={57} // Set the desired width of the image
                                            height={57} // Set the desired height of the image
                                        />
                                        <span className="text-white text-base font-['Poppins'] mt-2">Colectas</span>
                                    </div>
                                </div>
                            </button>
                            <button
                                className='w-1/2'
                                // onClick={() => { router.push('/home'); }}
                            >
                                <div className="w-full flex bg-colors-3 rounded-[20px] shadow p-4 h-[143px]">
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <Image
                                            src="/icons/remesas.svg" // Path to your image in the public directory
                                            alt="Description of the image"
                                            width={57} // Set the desired width of the image
                                            height={57} // Set the desired height of the image
                                        />
                                        <span className="text-white text-base font-['Poppins'] mt-2">Remesas</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <button
                                className='w-1/2'
                                // onClick={() => { router.push('/home'); }}
                            >
                                <div className="w-full flex bg-colors-3 rounded-[20px] h-[143px] shadow p-4">
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <Image
                                            src="/icons/money2.svg" // Path to your image in the public directory
                                            alt="Description of the image"
                                            width={57} // Set the desired width of the image
                                            height={57} // Set the desired height of the image
                                        />
                                        <span className="text-white text-base font-['Poppins'] mt-2">Retiro de efectivo</span>
                                    </div>
                                </div>
                            </button>
                            <button
                                className='w-1/2'
                                // onClick={() => { router.push('/home'); }}
                            >
                                <div className="w-full flex bg-colors-3 rounded-[20px] shadow p-4 h-[143px]">
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <Image
                                            src="/icons/recargas.svg" // Path to your image in the public directory
                                            alt="Description of the image"
                                            width={57} // Set the desired width of the image
                                            height={57} // Set the desired height of the image
                                        />
                                        <span className="text-white text-base font-['Poppins'] mt-2">Recargas</span>
                                    </div>
                                </div>
                            </button>
                        </div>


                    </div>
                )}


            </div>


            <BottomMenu />
        </div>
    );
}
