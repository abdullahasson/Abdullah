import { Routes, Route } from "react-router-dom"
import ProjectsNav from "../components/ProjectsNav"
import HooBank from "../Projects/HooBank"
import BrainWave from "../Projects/BrainWave"

export default function ProjectsPage() {
    return (
        <div className="flex justify-normal items-center bg-white">
            <div className="h-screen bg-[#2121cc22] w-[17%]">

                <div className="flex justify-center items-center p-3 text-[24px] h-[120px] ">
                    <h1 className="font-bold">Projects</h1>
                </div>

                <ProjectsNav />
            </div>


            <div className="h-screen bg-[var(--bg-color)]">
                <Routes>
                    <Route path="/Abdullah/Projects/HooBank/" element={<HooBank />} />
                    <Route path="/Abdullah/Projects/BrainWave" element={<BrainWave />} />
                </Routes>
            </div>
        </div>
    )
}