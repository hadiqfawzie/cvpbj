'use client'

import { useState, createContext, useContext } from "react";
import UploadImage from "./UploadImage";
import supabase from "../../../../utils/supabase";

export const MyContext = createContext()

const CreateKatalog = () => {
    const [deskripsi, setDeskripsi] = useState('')
    const [bintang, setBintang] = useState('')
    const [harga, setHarga] = useState('')
    const [diskon, setDiskon] = useState(0)
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
            <div className="w-3/4 md:w-1/2 bg-slate-500 text-white mx-auto rounded-xl shadow-lg px-4 py-4">
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
                        <label htmlFor="deskripsi" className="block text-gray-700 font-bold mb-2">
                            Deskripsi:

                            <textarea
                                type="text" id="deskripsi" className="shadow appearance-none border rounded w-full py-2 px-3 
                                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="ex: 1121100100"
                                value={deskripsi}
                                onChange={(e) => { setDeskripsi(e.target.value) }}
                            />
                        </label>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="bintang" className="block text-gray-700 font-bold mb-2">
                            Bintang:

                            <input
                                type="text" id="bintang" className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="ex: Nindi"
                                value={bintang}
                                onChange={(e) => { setBintang(e.target.value) }}
                            />
                        </label>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="harga" className="block text-gray-700 font-bold mb-2">
                            Harga:
                        </label>
                        <input
                            type="text" id="harga" className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="ex: 2021"
                            value={harga}
                            onChange={(e) => { setHarga(e.target.value) }}
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
                            Diskon :
                            <input
                                type="text" id="harga" className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="ex: 2021"
                                value={diskon}
                                onChange={(e) => { setDiskon(e.target.value) }}
                            />
                        </label>

                    </div>
                    <div className="flex flex-row justify-end mt-4">
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