import { projects } from '../../utils/projectsData'

const Blog = () => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main>
                <h1>Blog</h1>
            </main>
        </div>
    )
}

export default Blog;