import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function TopNav({ type = 'profile', goto = 'home'}) {
    const router = useRouter(); // Use useRouter hook

    return (
        <>
            {type == 'profile' && (
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
                                // onClick={() => router.push('/home')}
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

            )}

            {type == 'go-back' && (
                <div class="w-full h-40 bg-colors-1 rounded-bl-3xl rounded-br-3xl shadow p-8 flex items-end">
                    <div className='flex justify-between w-full'>
                        <div class="flex items-center px-2 w-[69px] h-[40px] bg-blue-100 rounded-full shadow">
                            <button onClick={() => router.push('/' + goto)} className='w-full flex justify-center pe-1'>
                                <Image
                                    src="/icons/back.svg" // Path to your image in the public directory
                                    alt="Description of the image"
                                    width={24} // Set the desired width of the image
                                    height={24} // Set the desired height of the image
                                />
                            </button>
                        </div>

                        <div className='flex'>
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

            )}

        </>
    );
}
