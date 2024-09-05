import { Separator } from '@/components/ui/separator';
import { LayoutDashboard } from 'lucide-react';
import { FolderKanban } from 'lucide-react';
import { CalendarRange } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className='flex flex-col px-8 py-4 gap-10 text-gray-500'>
            <section className='text-2xl font-semibold flex flex-col gap-2'>
                <h1 className='text-black'>
                    Task
                    <span className='text-accentPrimary'>It</span>
                </h1>
                    <Separator/>
            </section>
            <section className='flex flex-col gap-4'>
                <h1 className='font-semibold text-black'>Overview</h1>
                <NavLink
                    to={'/dashboard'}
                    className={({ isActive }) => `flex items-center gap-2 w-fit hover:text-accentPrimary ${isActive && 'text-accentPrimary font-semibold'}`}
                >
                    <LayoutDashboard size={18} />
                    <span>
                        Dashboard
                    </span>
                </NavLink>
                <NavLink
                    to={'/myprojects'}
                    className={({ isActive }) => `flex items-center gap-2 w-fit hover:text-accentPrimary ${isActive && 'text-accentPrimary font-semibold'}`}
                >
                    <span>
                        <FolderKanban size={18} />
                    </span>
                    <span>
                        My Projects
                    </span>
                </NavLink>
                <NavLink
                    to={'/calendar'}
                    className={({ isActive }) => `flex items-center gap-2 w-fit hover:text-accentPrimary ${isActive && 'text-accentPrimary font-semibold'}`}
                >
                    <CalendarRange size={18} />
                    <span>
                        Calendar
                    </span>
                </NavLink>
            </section>
            <section className='flex flex-col gap-4'>
                <h1 className='font-semibold text-black'>Settings</h1>

                <section className='flex gap-2 items-center cursor-pointer w-fit hover:text-accentPrimary'>
                    <span>
                        <LogOut size={18} />
                    </span>
                    <span>
                        Logout
                    </span>
                </section>
            </section>
        </nav>
    )
}

export default Sidebar