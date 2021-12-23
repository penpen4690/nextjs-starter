import { projects } from '../../utils/projectsData'
import Aside from '../../components/Aside'

const Blog = ({ blog }) => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main className='mainblog'>
                <h1>Blog</h1>
            </main>
        </div>
    )
}

export default Blog;
