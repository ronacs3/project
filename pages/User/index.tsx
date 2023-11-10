import LayoutDefault from '@/components/Layout';
import React from 'react';
import { Divider } from 'antd';
import { FileEdit } from 'lucide-react';
import Link from 'next/link';
export default function User() {
    return (
        <LayoutDefault>
            <div className="h-screen flex flex-col">
                <div className=" flex pt-20 gap-2 pl-24">
                    <div className="pt-2.5">
                        <div className=" w-8 h-4 bg-allboard border rounded "></div>
                    </div>
                    <div className="text-2xl font-medium">Profile</div>
                </div>
                <div className=" w-full h-full flex place-content-center items-center gap-20">
                    <div className="w-user h-user bg-black rounded-xl"></div>
                    <Divider type="vertical" className="bg-black w-0.5 h-user" />
                    <div className=" flex flex-col">
                        <div className="flex flex-col text-lg font-medium gap-10">
                            <div>Username: asdasdasd</div>
                            <div>Email: asdasdasd </div>
                            <div>First Name: asdasdasd</div>
                            <div>Last Name: asdasdasd </div>
                        </div>
                        <div className=" flex text-lg font-medium pt-14">
                            <Link
                                href={'/User/EditProfile'}
                                className=" w-40 h-20 border-2 rounded-xl border-blue-500 flex place-content-center items-center gap-3"
                            >
                                <div>
                                    <FileEdit />
                                </div>
                                <div className="font-sans">Edit Profile</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    );
}
