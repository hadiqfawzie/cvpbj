import Link from "next/link";

const Nav = () => {
    return (
        <>
            <nav className="bg-gray-900 dark:bg-gray-900 border-l-gray-200 border-l-4 dark:border-l-gray-200 dark:border-l-4 
                 border-b-purple-300 border-b-4 dark:border-b-purple-300 dark:border-b-4 rounded-bl-2xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-2">
                    <div className="w-full flex flex-wrap justify-between px-2">
                        <div>
                            <Link href="https://katalog-pbj.vercel.app/">
                                <img src="/logo.svg" className="h-8" alt="Logo PBJ" />
                            </Link>
                        </div>
                        <div className="text-yellow-300 dark:text-yellow-300 text-xl mx-auto
                            font-medium">CV Putra Blimbingsari Jaya</div>
                    </div>                   
                </div>
                <div className="text-sm text-slate-300 dark:text-sm dark:text-slate-400 italic text-center -mt-1.5 pb-2">
                    Murah - Berkualitas - Full Service
                </div>
             
            </nav>

        </>
    );
}

export default Nav;