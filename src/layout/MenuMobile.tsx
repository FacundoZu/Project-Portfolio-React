import { useEffect, useState } from "react";


interface mobileMenuProps {
    isMobileMenuOpen: boolean,
    isMobileMenuActive: boolean,
    setIsMobileMenuOpen: (value: boolean) => void,
    navItems: { id: string; label: string }[]
}

const MenuMobile = (props: mobileMenuProps) => {

    return (props.isMobileMenuActive &&
        <div
            className={`${props.isMobileMenuOpen ? "animate-mobileMenu" : "animate-mobileMenuClose"} origin-top-right `}
        >
            <div className="w-1/2 right-0 absolute px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-bg-100/50 backdrop-blur-sm rounded-b-2xl">
                {props.navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`/#${item.id}`}
                        onClick={() => props.setIsMobileMenuOpen(false)}
                        className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default MenuMobile