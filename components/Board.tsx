import { LampCeiling } from 'lucide-react';
const BoardItem = () => {
    return (
        <div className=" h-36 w-board rounded-md bg-white  flex flex-row gap-10 px-8 py-8 ">
            <div className="w-full flex flex-col gap-6 place-content-start  font-medium">
                <div className="">Name Board</div>
                <div className="flex flex-row gap-2">
                    <div className="h-8 w-16 rounded-md flex place-content-center pt-1 bg-green-300">23°C</div>
                    <div className="h-8 w-16 rounded-md flex place-content-center pt-1 bg-blue-300">23%</div>
                    <div className="h-8 w-16 rounded-md flex place-content-center pt-1 bg-yellow-400">23 Lux</div>
                </div>
            </div>
            <div className="w-full flex place-content-end ">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-4">
                        <div>
                            <LampCeiling />
                        </div>
                        <div>
                            <LampCeiling />
                        </div>
                        <div>
                            <LampCeiling />
                        </div>
                        <div>
                            <LampCeiling />
                        </div>
                    </div>
                    <div className="flex place-content-center w-full">
                        <button className="rounded font-medium bg-slate-500 hover:bg-cyan-500 p-2">Unassign</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { BoardItem };
