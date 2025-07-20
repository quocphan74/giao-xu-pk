'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
export default function Header() {
    const dropdownRef = useRef<HTMLLIElement>(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (href: string) => pathname.startsWith(href)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    const menuItems = [
        {
            label: 'Giới thiệu',
            href: '/gioi-thieu',
            subMenu: [
                { label: 'Giới thiệu chung', href: '/gioi-thieu' },
                { label: 'Lịch sử giáo xứ', href: '/gioi-thieu/lich-su' },
                { label: 'Linh mục chánh xứ, phụ tá', href: '/gioi-thieu/linh-muc' },
                { label: 'Ban hành giáo & hội đoàn', href: '/gioi-thieu/hoi-doan' },
            ],
        },
        { label: 'Tin tức', href: '/tin-tuc' },
        { label: 'Thư viện', href: '/thu-vien' },
        { label: 'Bài giảng', href: '/bai-giang' },
        { label: 'Liên hệ', href: '/lien-he' },
    ]

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-700">Trang Chủ</Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    {menuItems.map((item) =>
                        item.subMenu ? (
                            <li className="relative group" key={item.label} ref={dropdownRef}>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className={`flex items-center gap-1 hover:text-blue-600 transition ${isActive(item.href) ? 'text-blue-600 font-semibold' : ''
                                        }`}
                                >
                                    {item.label}
                                    <ChevronDown
                                        className={`w-4 h-4 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {dropdownOpen && (
                                    <ul className="absolute top-full left-0 mt-3 w-64 bg-white border rounded-lg shadow-xl z-50 animate-fade-in">
                                        {item.subMenu.map((sub) => (
                                            <li key={sub.href}>
                                                <Link
                                                    href={sub.href}
                                                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition"
                                                >
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`hover:text-blue-600 transition ${isActive(item.href) ? 'text-blue-600 font-semibold' : ''
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                {/* Hamburger icon for mobile */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden px-4 pb-4 animate-fade-in">
                    <ul className="space-y-2 text-gray-700 font-medium">
                        {menuItems.map((item) =>
                            item.subMenu ? (
                                <li key={item.label}>
                                    <details className="group">
                                        <summary className="cursor-pointer flex justify-between items-center py-2 px-2 hover:text-blue-600">
                                            {item.label}
                                            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <ul className="pl-4 space-y-1 pt-2">
                                            {item.subMenu.map((sub) => (
                                                <li key={sub.href}>
                                                    <Link
                                                        href={sub.href}
                                                        className="block px-2 py-1 hover:text-blue-600"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            ) : (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`block px-2 py-2 hover:text-blue-600 ${isActive(item.href) ? 'text-blue-600 font-semibold' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}

            {/* Animation */}
            <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.2s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </nav>
    )
}
