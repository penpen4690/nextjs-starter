import { projects } from '../../utils/projectsData'
import Aside from '../../utils/aside'
const About = () => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main>
                <h1>About Me</h1>
                <h2>
                    <a href="/">
                        Back to home
                    </a>
                </h2>
            </main>
        </div>
    )
}

export default About;