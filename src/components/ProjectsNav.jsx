import { Link } from "react-router-dom"

export default function ProjectsNav() {
    return (
        <ul className="flex flex-col justify-between items-center gap-1 p-2">
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link to={"/Abdullah/Projects/HooBank/"}>
                    HooBank
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link to={"/Abdullah/Projects/HooBank/"}>
                    Project2
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project3
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project4
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project1
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project2
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project3
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project4
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project2
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project3
                </Link>
            </li>
            <li className="w-full bg-[#ccc] p-2 rounded-md text-center text-[22px]">
                <Link>
                    Project4
                </Link>
            </li>
        </ul>
    )
}