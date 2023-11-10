import { Dropdown, MenuProps, Space } from 'antd';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
    const items: MenuProps['items'] = [
        {
            label: <Link href="/User">Profile</Link>,
            key: '0',
        },
        {
            label: (
                <a target="_blank" href="/">
                    Log out
                </a>
            ),
            key: '1',
        },
    ];
    return (
        <div className="flex w-full h-navbar bg-slate-800">
            <div className="flex pt-11 w-sidebar place-content-center items-center">
                <Image src="/logo.ico" alt="logo" width={100} height={50} />
            </div>
            <div className="flex pt-5 w-full">
                <div className=" flex justify-end w-full pr-2">
                    <Dropdown menu={{ items }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Username
                                <ChevronDown />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}
