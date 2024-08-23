import Link from 'next/link';
import React from 'react';
import Icons from '../global/icons';
import Image from 'next/image';
import { buttonVariants } from '../ui/button';

const Navbar = () => {

    const user = false;
    return (
        <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <div className="flex justify-between items-center h-full mx-auto md:max-w-screen-xl">
                <div className="flex items-start">
                    <Link href="/" className="flex items-center gap-1"> 
                            <Image
                                src="/icons/Atenea_Conocimientos_logo_fondo_transparente (12).png"
                                alt="Logo"
                                width={100}
                                height={50}
                            />              
                        <span className="text-lg font-medium">Atenea Conocimientos</span>
                    </Link>
                </div>

                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <ul className="flex items-center justify-center gap-8">
                        <li className="hover:text-foreground/80 text-sm">
                            <Link href="#">
                                HTML
                            </Link>
                        </li>
                        <li className="hover:text-foreground/80 text-sm">
                            <Link href="#">
                                CSS
                            </Link>
                        </li>
                        <li className="hover:text-foreground/80 text-sm">
                            <Link href="#">
                                JavaScript
                            </Link>
                        </li>
                        <li className="hover:text-foreground/80 text-sm">
                            <Link href="#">
                                Editor de código
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    {user ? ("user button") : (
                        <>
                            <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>Iniciar sesión</Link>
                            <Link href="/sign-up" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>Registrarse</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;
