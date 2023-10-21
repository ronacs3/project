import LayoutDefault from '@/components/Layout';
import { Switch } from 'antd';
import { LampCeiling, BadgePlus } from 'lucide-react';
export default function Home() {
    return (
        <LayoutDefault>
            <div className="h-screen bg-slate-100">
                <div className=" p-8 text-2xl flex flex-row place-content-end ">Welcome user!</div>
                {/* sensor */}
                <div className=" px-11 flex flex-row">
                    <div className="text-xl font-medium">Sensor</div>
                </div>
                <div className="flex flex-row justify-center gap-11 ">
                    <div className="border rounded w-60 h-28 flex flex-col items-center bg-white gap-3 ">
                        <div className="pt-4 font-normal text-xl">Temperatute</div>
                        <div className="font-normal text-4xl">23°C</div>
                    </div>
                    <div className="border rounded w-60 h-28  flex flex-col items-center bg-white gap-3 ">
                        <div className="pt-4 font-normal text-xl">Humidity</div>
                        <div className="font-normal text-4xl">23%</div>
                    </div>
                    <div className="border rounded w-60 h-28  flex flex-col items-center bg-white gap-3 ">
                        <div className="pt-4 font-normal text-xl">Lux</div>
                        <div className="font-normal text-4xl">23°C</div>
                    </div>
                </div>
                {/* Chart */}
                <div className=" px-11 pb-3 flex flex-row">
                    <div className="text-xl font-medium">Chart</div>
                </div>
                <div className="h-96 px-11">
                    <div className="border rounded bg-black h-full"></div>
                </div>
                {/* Device */}
                <div className=" px-11 py-4 flex flex-row gap-2">
                    <div className="text-xl font-medium">Deivce</div>
                    <div className="pt-1">
                        <BadgePlus />
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-9">
                    <div className=" w-60 h-56 border bg-gradient-to-r from-device-1 to-device-2 rounded-lg pt-7 px-9 text-white">
                        <div className="flex flex-row gap-2 pb-24">
                            <div>
                                <LampCeiling />
                            </div>
                            <div className="w-full flex flex-row place-content-end">
                                <Switch />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className=" w-full flex flex-row place-content-start">Pin : D1</div>
                            <div className="w-full flex flex-row place-content-end">State : ON</div>
                        </div>
                    </div>
                    <div className=" w-60 h-56 border bg-gradient-to-r from-device-1 to-device-2 rounded-lg pt-7 px-9 text-white">
                        <div className="flex flex-row gap-2 pb-24">
                            <div>
                                <LampCeiling />
                            </div>
                            <div className="w-full flex flex-row place-content-end">
                                <Switch />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className=" w-full flex flex-row place-content-start">Pin : D1</div>
                            <div className="w-full flex flex-row place-content-end">State : ON</div>
                        </div>
                    </div>
                    <div className=" w-60 h-56 border bg-gradient-to-r from-device-1 to-device-2 rounded-lg pt-7 px-9 text-white">
                        <div className="flex flex-row gap-2 pb-24">
                            <div>
                                <LampCeiling />
                            </div>
                            <div className="w-full flex flex-row place-content-end">
                                <Switch />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className=" w-full flex flex-row place-content-start">Pin : D1</div>
                            <div className="w-full flex flex-row place-content-end">State : ON</div>
                        </div>
                    </div>
                    <div className=" w-60 h-56 border bg-gradient-to-r from-device-1 to-device-2 rounded-lg pt-7 px-9 text-white">
                        <div className="flex flex-row gap-2 pb-24">
                            <div>
                                <LampCeiling />
                            </div>
                            <div className="w-full flex flex-row place-content-end">
                                <Switch />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className=" w-full flex flex-row place-content-start">Pin : D1</div>
                            <div className="w-full flex flex-row place-content-end">State : ON</div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    );
}
