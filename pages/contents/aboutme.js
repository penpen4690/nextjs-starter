import { projects } from '../../utils/projectsData'
import Aside from '../../components/Aside'
const AboutMe = () => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main>
                <h1>About Me</h1>
            </main>
        </div>
    )
}

export default AboutMe;