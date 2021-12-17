import { projects } from '../../utils/projectsData'

const Blog = () => {
    return (
        <div className="project">
            <aside>
                <h3>コンテンツ</h3>
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
                </ul>
            </aside>
            <main>
                <h1>Blog</h1>
            </main>
        </div>
    )
}

export default Blog;