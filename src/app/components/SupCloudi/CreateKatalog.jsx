'use client'

import { useState, createContext, useContext } from "react";
import UploadImage from "./UploadImage";
import supabase from "../../../../utils/supabase";

export const MyContext = createContext()

const CreateKatalog = () => {
    const [deskripsi, setDeskripsi] = useState('')
    const [bintang, setBintang] = useState('')
    const [harga, setHarga] = useState('')
    const [diskon, setDiskon] = useState('')
    const [foto, setFoto] = useState('')

    const clearForm = () => {
        setDeskripsi('')
        setBintang('')
        setHarga(0)
        setDiskon(0)
    }

    const addKatalog = async () => {
        if (!deskripsi || !bintang || !harga || !diskon || !foto) {
            alert('isian tidak boleh kosong')
        }
        else {
            const katalogBaru = { deskripsi, bintang, harga, diskon, foto };
            try {
                const { error } = await supabase
                    .from('katalog')
                    .insert(katalogBaru)

                    alert('Data berhasil ditambah ')
                    clearForm()

                if (error) {
                    console.log(error)
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <>
            <div className="w-full md:w-1/2 bg-slate-500 text-white rounded-xl shadow-lg px-2 py-4 mx-auto">
                <h1 className="text-2xl font-semibold">Input Katalog</h1>
                <hr />
                <div>
                    <MyContext.Provider value={[foto, setFoto]}>
                        <div className="mt-1">
                            <UploadImage />
                            {/* <p>{foto}</p> */}
                        </div>
                    </MyContext.Provider>
                    <div className="mt-4">
                        <label htmlFor="deskripsi" className=" text-gray-300 text-sm font-semibold">
                            Deskripsi:
                            <textarea
                                type="text" id="deskripsi" className="shadow appearance-none border rounded w-full py-2 px-3 
                                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="ex: Nama dan jenis barang"
                                value={deskripsi}
                                onChange={(e) => { setDeskripsi(e.target.value) }}
                            />
                        </label>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="bintang" className="text-gray-300 text-sm font-semibold">
                            Bintang:
                            <input
                                type="text" id="bintang" className="shadow appearance-none border rounded w-full py-2 px-3 
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="ex: 4.5"
                                value={bintang}
                                onChange={(e) => { setBintang(e.target.value) }}
                            />
                        </label>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="harga" className="block text-gray-300 text-sm font-semibold mb-1">
                            Harga:
                            <input
                                type="text" id="harga" className="shadow appearance-none border rounded     
                                    w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="ex: 7300000"
                                value={harga.replace(/[^0-9]/g, '')}
                                onChange={(e) => { setHarga(e.target.value) }}
                            />
                        </label>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="program-studi" className="block text-gray-300 text-sm font-semibold mb-1">
                            Diskon :
                            <input
                                type="text" id="harga" className="shadow appearance-none border rounded w-full py-2 px-3 
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="ex: 9"
                                value={diskon}
                                onChange={(e) => { setDiskon(e.target.value) }}
                            />
                        </label>

                    </div>
                    <div className="flex flex-row justify-end mt-2">
                        <button
                            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                            onClick={addKatalog}
                        >
                            Insert
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateKatalog;