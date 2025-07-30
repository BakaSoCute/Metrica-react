import ProjectsCard from "../ProjectsCard/ProjectsCard"
import Heading from "../Heading/Header"
import projectsImg1 from "../../assets/projectsImg1.png"
import projectsImg2 from "../../assets/projectsImg2.png"
import projectsImg3 from "../../assets/projectsImg3.png"
export default function ProjectsSection ()  {

    const projects = [
    {
        image: projectsImg1,
        title:"ЖК ПРАВОБЕРЕЖНЫЙ",
        squar: 112,
        year: 2023,
        link: "projects1",
        isNew: true,
    },
    {
        image: projectsImg2,
        title:"ЖК НОРВЕЖСКИЙ ПАРК",
        squar: 75,
        year: 2023,
        link: "projects2",
        isNew: false,
    },
    {
        image: projectsImg3,
        title:"ЖК СОСНОВСКИЕ ОЗЁРА",
        squar: 94,
        year: 2022,
        link: "projects3",
        isNew: false
    }]
    return (
        <div>
            <Heading 
            text="ПРОЕКТЫ"
            level="h2"
            />
            {projects.map(project => (
                <ProjectsCard 
                title={project.title}
                image={project.image}
                squar={project.squar}
                year={project.year}
                link={project.link}
                isNew={project.isNew}
                />
            ))}
        </div>

    )
}