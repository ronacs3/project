import { LampCeiling } from 'lucide-react';
import { Switch } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
const format = 'HH:mm';

export default function Deivce() {
    return (
        <div className=" w-60 h-56 rounded-lg pt-7 px-9 bg-slate-700">
            <div className="flex flex-row gap-2 pb-24">
                <div>
                    <LampCeiling />
                </div>
                <div className="w-full flex flex-row place-content-end">
                    <Switch />
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <div className=" w-full pt-1 flex flex-row place-content-start">Pin : D1</div>
                <div className="w-full flex flex-row place-content-end">
                    <TimePicker defaultValue={dayjs('00:00', format)} format={format} />
                </div>
            </div>
        </div>
    );
}
