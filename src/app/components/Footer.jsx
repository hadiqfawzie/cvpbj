'use client'

import Link from "next/link";

const Footer = () => {
    return ( 
        <>
        <div className="fixed bottom-0 right-0">
        <Link href="https://wa.me/+6285217298270?text=Hai%20Pak%20Agus,%20Saya%20mau%20pesan%20barang">
          <img className="w-20 h-20" src="/wa.svg" alt="wa" />
        </Link>
      </div>     
        </>
     );
}
 
export default Footer;