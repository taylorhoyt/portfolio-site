import NavBar from "@/app/components/NavBar";
import ProjectsSlider from "@/app/components/ProjectsSlider";

export default function Projects() {
    return(
        <body className="desktop:overflow-hidden">
            <div className="z-1">
                <NavBar />
            </div>
            <div className="z-0">
                <ProjectsSlider />
            </div>

        </body>
    );
}