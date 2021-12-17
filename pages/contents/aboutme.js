import { projects } from '../../utils/projectsData'
import Aside from '../../components/Aside'
const AboutMe = () => {
    return (
        <div className="project">
            <aside>
                {/* <h3>コンテンツ</h3>
                <ul>
                    {projects.map((project) => {
                        return (
                            <li key={project.id}>
                                <a href={`/contents/${project.slug}`}>{project.name}</a>
                            </li>
                        );
                    })}

                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul> */}
                <Aside projects={projects} />
            </aside>
            <main>
                <h1>About Me</h1>
            </main>
        </div>
    )
}

export default AboutMe;