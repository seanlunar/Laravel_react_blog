import {Link} from '@inertiajs/react';

export default function Layouts({ children }) {
    return (
        <>
            <header className="p-4 bg-gray-800">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="text-lg font-semibold text-white">Home</Link>
                    <Link href="/posts/create" className="text-lg font-semibold text-white">Create</Link>
                </nav>
            </header>
            <main className="p-4">{children}</main>
        </>
    )
}
