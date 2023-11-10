import Link from 'next/link';
import { ArrowLeft, HomeIcon, LayoutGrid, LogOut, PlugZap, User } from 'lucide-react';
import { useRouter } from 'next/router';
function HomeSibar() {
    return (
        <div className="flex flex-col place-content-center items-center w-sidebar text-lg font-medium ">
            <div className="flex flex-col gap-14">
                <Link href={'/'} className="flex flex-row gap-2">
                    <HomeIcon className=" text-blue-800" />
                    <div className="text-blue-800">OVER VIEW</div>
                </Link>
                <Link href={'/Board'} className="flex flex-row gap-2">
                    <LayoutGrid className=" opacity-30 hover:text-blue-800 hover:opacity-100" />
                    <div>ALL BOARD</div>
                </Link>
                <Link href={'/User'} className="flex flex-row gap-2">
                    <User className="opacity-30 hover:text-blue-800 hover:opacity-100" />
                    <div>USER</div>
                </Link>
            </div>
        </div>
    );
}

function BoardSibar() {
    return (
        <div className="flex flex-col place-content-center items-center w-sidebar text-lg font-medium ">
            <div className="flex flex-col gap-14">
                <Link href={'/'} className="flex flex-row gap-2">
                    <HomeIcon className="opacity-30 hover:text-blue-800 hover:opacity-100" />
                    <div className="">OVER VIEW</div>
                </Link>
                <Link href={'/Board'} className="flex flex-row gap-2">
                    <LayoutGrid className=" text-blue-800" />
                    <div className="text-blue-800">ALL BOARD</div>
                </Link>
                <Link href={'/User'} className="flex flex-row gap-2">
                    <User className=" opacity-30 hover:text-blue-800 hover:opacity-100" />
                    <div>USER</div>
                </Link>
            </div>
        </div>
    );
}
function UserSibar() {
    return (
        <div className="flex flex-col place-content-center items-center w-sidebar text-lg font-medium ">
            <div className="flex flex-col gap-14">
                <Link href={'/'} className="flex flex-row gap-2">
                    <HomeIcon className=" opacity-30 hover:text-blue-800 hover:opacity-100" />
                    <div className="">OVER VIEW</div>
                </Link>
                <Link href={'/Board'} className="flex flex-row gap-2">
                    <LayoutGrid className=" opacity-30 hover:text-blue-800 hover:opacity-100" />
                    <div>ALL BOARD</div>
                </Link>
                <Link href={'/User'} className="flex flex-row gap-2">
                    <User className=" text-blue-800" />
                    <div className="text-blue-800">USER</div>
                </Link>
            </div>
        </div>
    );
}

export default function LeftSibar() {
    const router = useRouter();
    return (
        <>
            {router.pathname === '/' && <HomeSibar />}
            {router.pathname === '/Board' && <BoardSibar />}
            {router.pathname === '/User' && <UserSibar />}
            {router.pathname === '/User/EditProfile' && <UserSibar />}
        </>
    );
}
