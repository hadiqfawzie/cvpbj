'use client'
import { CldImage } from 'next-cloudinary';
import ModalComp from './ModalComp';
import { createContext, useState } from 'react';

export const MyContext = createContext()

const Card = (props) => {
    const [show, setShow] = useState(false)
    const {
        id,
        foto,
        deskripsi,
        bintang,
        harga,
        diskon,
        hargaAsal
    } = props

    return (
        <>
            <div className="w-full relative max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-sm 
                          shadow-yellow-200 dark:bg-gray-800 dark:border-gray-700 pb-1">
                <a href="#">
                    {/* <img className="p-1 rounded-t-lg" src={`/img/desa/${foto}`} alt="product image" /> */}
                    <CldImage className='p-1 rounded-t-lg w-52 h-32'
                        src={foto} // Use this sample image or upload your own via the Media Explorer
                        width="400" // Transform the image: auto-crop to square aspect_ratio
                        height="300"
                        alt="foto-barang"
                    />
                </a>
                <div className='-mt-[125px] mb-24 ml-1'>
                    <img className='w-6 h-6' src='/logo.svg' alt='logo' />
                </div>
                <div className="px-1 pb-1">
                    <a href="#">
                        <h5 className="text-sm tracking-tight text-white dark:text-white px-1">
                            {deskripsi}
                        </h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-3 ml-1">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse pl-1 bg-slate-500 p-1 rounded">
                            <svg className="w-4 h-5 text-yellow-300" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="bg-yellow-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 
                            rounded  ml-1">{bintang}</span>
                        </div>
                    </div>
                    <div className="px-1">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-bold text-white dark:text-white">Rp. {harga}</div>
                            <span className="bg-red-600 text-yellow-200 text-xs font-bold px-1 py-0.5 
                                            -mr-2.5 rounded-r-sm ">-{diskon}%</span>
                        </div>
                        <div class="line-through text-slate-400 text-sm mb-8">Rp. {hargaAsal}</div>
                    </div>
                </div>
            <div className=' absolute bottom-0 left-0'>
                <button className='p-2 text-yellow-400 dark:text-yellow-400 text-sm italic font-semibold' 
                    onClick={() => setShow(true)}>Detil</button>
            </div>
            </div>

            <MyContext.Provider value={[show, setShow]}>
                {show && <ModalComp id={id} foto={foto} deskripsi={deskripsi} bintang={bintang} harga={harga} diskon={diskon} hargaAsal={hargaAsal} />}
            </MyContext.Provider>
        </>
    );
}

export default Card;
