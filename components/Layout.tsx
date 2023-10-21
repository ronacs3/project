import Head from 'next/head';
import { CommonReactProps } from '@/types/common';
import LeftSibar from './LeftSibar';
export default function LayoutDefault({ children }: CommonReactProps): JSX.Element {
    return (
        <div className="flex flex-row w-full h-screen">
            <Head>
                <title>IOT-Dashboard</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LeftSibar />
            <div className="w-full">{children}</div>
        </div>
    );
}