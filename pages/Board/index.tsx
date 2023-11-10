import { BoardItem } from '@/components/Board';
import LayoutDefault from '@/components/Layout';
import { PlusSquare } from 'lucide-react';

export default function User() {
    return (
        <LayoutDefault>
            <div className="h-full flex flex-col">
                <div className=" flex pt-20 gap-2 pl-24">
                    <div className="pt-2.5">
                        <div className=" w-8 h-4 bg-allboard border rounded "></div>
                    </div>
                    <div className="text-2xl font-medium">All Board</div>
                    <div className="pt-1.5">
                        <PlusSquare />
                    </div>
                </div>
                <div className=" w-full h-full flex place-content-center items-center">
                    <div className="flex flex-col gap-5 ">
                        {/* #1 */}
                        <BoardItem />
                        {/* #2 */}
                        <BoardItem />
                        <BoardItem />
                        <BoardItem />
                    </div>
                </div>
            </div>
        </LayoutDefault>
    );
}
