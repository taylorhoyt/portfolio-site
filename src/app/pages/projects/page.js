import NavBar from "@/app/components/NavBar";
import ProjectsSlider from "@/app/components/ProjectsSlider";

export default function Projects() {
    return(
        <body className="desktop:overflow-hidden">
            <NavBar />
            <ProjectsSlider />
        </body>
    );
}