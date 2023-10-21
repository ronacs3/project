import LayoutDefault from '@/components/Layout';
import React from 'react';
import { Divider } from 'antd';
import { ArrowLeft, FileEdit } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function User() {
    const router = useRouter();
    return (
        <LayoutDefault>
            <div className="h-screen bg-slate-100 flex flex-col">
                <div className=" flex pt-20 gap-2 pl-24">
                    <button className="pt-1.5" onClick={() => router.back()}>
                        {/* <div className=" w-8 h-4 bg-allboard border rounded "></div> */}
                        <ArrowLeft />
                    </button>
                    <div className="text-2xl font-medium">Edit Profile</div>
                </div>
                <div className=" w-full h-full flex place-content-center items-center gap-20">
                    <div className="w-user h-user bg-black rounded-xl"></div>
                    <Divider type="vertical" className="bg-black w-0.5 h-user" />
                    <form className=" grid grid-cols-2 text-lg font-medium gap-10">
                        <label className="">Username:</label>
                        <input type="text" className=" rounded" />
                        <label className="">Email:</label>
                        <input type="text" className=" rounded" />
                        <label>First Name:</label>
                        <input type="text" className="rounded" />
                        <label>Last Name:</label>
                        <input type="text" className=" rounded" />
                        <div className=" flex text-lg font-medium">
                            <button className=" w-40 h-20 border-2 rounded-xl border-blue-500 flex place-content-center items-center gap-3">
                                <div>
                                    <FileEdit />
                                </div>
                                <div className="font-sans">Edit Profile</div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutDefault>
    );
}
