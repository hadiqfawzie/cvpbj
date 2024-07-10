'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Footer = () => {
  const [search, setSearch] = useState()
  const router = useRouter()

  const handleSubmit = (e)=>{
    e.preventDefault()
    // router.push(`/katalog/${search}`)
    window.history.replaceState(null,'',`/katalog/${search}`)
  }
  return (
    <>
      <div className="w-full fixed bottom-0 flex justify-center gap-2 ">
        <form className="w-5/6">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
                  strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-3.5  ps-10 text-sm text-gray-900 border mt-4 
              border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Cari Nama Barang" required value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <Link href={`/katalog/${search}`} className="text-white absolute end-2 bottom-2.5  focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm bg-white dark:bg-white 
              dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <img className="w-8 h-8" src="/enter1.png" alt="enter" />
              </Link>
          </div>
        </form>

        <Link className="pt-[18px]" href="https://wa.me/+6285217298270?text=Hai%20Pak%20Agus,%20Saya%20mau%20pesan%20barang">
          <img className="w-12 h-12 " src="/wa_trans.png" alt="wa" />
        </Link>
      </div>
    </>
  );
}

export default Footer;