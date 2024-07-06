import Image from "next/image";

import Card from "@/app/components/Card";
import supabase from "../../../../utils/supabase";

export default async function Katalog({params}) {  
  let hasil
  if(params.slug == 'sekolah' || params.slug == 'desa'){

    let peruntukan = 'peruntukan.eq.desa,peruntukan.eq.all'
    if(params.slug == 'sekolah'){
      peruntukan = 'peruntukan.eq.sekolah,peruntukan.eq.all'
    }
    
    const { data : katalog, error } = await supabase.from('katalog').select('').or(peruntukan).order('id', { ascending: true });
    hasil = katalog
  }
  else{
    const {data : katalog, error} = await supabase.from('katalog').select().ilike('deskripsi',`%${params.slug}%`)
    hasil = katalog
    console.log('masuk');
  }
 
  // if (error) {
  //   console.log(error.message);
  // }
  return (
    <>
        
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-1">
       {hasil.map((brg,idx) => (
          
          <Card key={idx} foto={brg.foto} deskripsi={brg.deskripsi} 
                bintang={brg.bintang} harga={brg.harga.toLocaleString("id-ID")} diskon={brg.diskon} 
                hargaAsal={(brg.harga + (brg.harga * brg.diskon / 100)).toLocaleString("id-ID")} 
                />        
        ))}
      </div>           
    </>
  );
}
