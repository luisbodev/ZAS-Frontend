'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BottomMenu from '@/components/BottomMenu';
import Chart from '@/components/Chart';

export default function Home() {
    const router = useRouter(); // Use useRouter hook
    const chipData = ['Option number one', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
    const [selectedChip, setSelectedChip] = useState(chipData[0]);


    const navigateToLogin = () => {
        router.push('/'); // Navigate to the register page
    };

    const handleChipClick = (chip) => {
        setSelectedChip(chip);
    };

    return (
        <div className="flex flex-col flex-grow min-h-screen">
            <div>Home</div>

            <div className="flex overflow-x-auto space-x-4 py-4">
                {chipData.map((chip, index) => (
                    <button
                        key={index}
                        // className="flex-none px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition duration-300"
                        className={`flex-none px-4 py-2 rounded-full cursor-pointer ${selectedChip === chip ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                            } hover:bg-gray-300 transition duration-300`}
                        onClick={() => handleChipClick(chip)}
                    >
                        {chip}
                    </button>
                ))}
            </div>

            <div className="flex-grow">
                {/* Content based on selected chip */}
                {selectedChip && (
                    <div className="mt-4 p-4 bg-gray-100">
                        Information for {selectedChip}
                    </div>
                )}
                
                <Chart />
            </div>


            <BottomMenu />
        </div>
    );
}
