import Image from "next/image";

import Card from "@/app/components/Card";
import supabase from "../../../../utils/supabase";

export default async function Katalog({params}) {
  const {data : katalog, error} = await supabase.from('katalog').select().ilike('deskripsi',`%${params.slug}%`)
  
  if (error) {
    console.log(error.message);
  }
  return (
    <>        
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-1">
       {katalog.map((brg,idx) => (
          
          <Card key={idx} id={brg.id} foto={brg.foto} deskripsi={brg.deskripsi} 
                bintang={brg.bintang} harga={brg.harga.toLocaleString("id-ID")} diskon={brg.diskon} 
                hargaAsal={(brg.harga + (brg.harga * brg.diskon / 100)).toLocaleString("id-ID")} 
                />        
        ))}
      </div>     
      
    </>
  );
}
