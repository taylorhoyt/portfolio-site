import NavBar from "@/app/components/NavBar";
import ProjectsSlider from "@/app/components/ProjectsSlider";

export default function Projects() {
    return(
        <body className="desktop:overflow-hidden ">
        <div className="bg-gradient-to-b from-theme-navy via-theme-navy to-black">
            <div className="z-1">
                <NavBar />
            </div>
            <div className="z-0">
                <ProjectsSlider />
            </div>
        </div>

        </body>
    );
}