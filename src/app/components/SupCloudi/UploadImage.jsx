'use client'
//@ts-check

import { CldImage, CldUploadButton, CldUploadWidget } from 'next-cloudinary';
import { useContext, useState } from 'react';
import { MyContext } from './CreateKatalog';

const UploadImage = () => {
    const [publicId, setPublicId] = useState();
    const [foto, setFoto] = useContext(MyContext)

    const handleSuccessUpload = (results) => {
        setPublicId(results?.info.public_id)
        setFoto(results?.info.public_id)
        // console.log(results?.info);
    }

    return (
        <>
            <main className='p-2 text-center'>
                <section className='flex flex-col items-center justify-between'>
                    <CldImage className='p-1 rounded-lg w-64 h-44 mx-auto border-slate-300 bg-slate-400 border-2 my-2'
                        src={foto} // Use this sample image or upload your own via the Media Explorer
                        width="400" // Transform the image: auto-crop to square aspect_ratio
                        height="300"
                        alt="Foto-Barang"
                    />
                    <CldUploadWidget
                        uploadPreset='v4bmmlu7'
                        onSuccess={handleSuccessUpload}
                    >
                        {({ open }) => {
                            return (
                                <div>
                                    <button className='bg-blue-800 px-3 py-2 text-white text-md font-semibold 
                                            rounded-lg shadow-md shadow-slate-300 cursor-pointer' 
                                            onClick={() => open()}>
                                        Ambil Foto
                                    </button>

                                </div>
                            )
                        }}
                    </CldUploadWidget>
                </section>
                {/* <p>{publicId}</p>
                <p>{foto}</p> */}

            </main>
            {/* <CldUploadButton
                className={styles.button}
                onUpload={(error, result, widget) => {
                    setResource(result?.info);  // { public_id, secure_url, etc }
                    widget.close();
                }}
                signatureEndpoint="/api/sign-cloudinary-params"
                uploadPreset="next-cloudinary-signed"
            >
                Upload to Cloudinary
            </CldUploadButton> */}
        </>
    );
}

export default UploadImage;

