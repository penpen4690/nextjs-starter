import { projects } from '../../utils/projectsData'
import { games } from '../../utils/gamesData'
import SmallCard from '../../components/SmallCard';

const Game = () => {
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
                <h1>Games</h1>
                <div className="contents-card-grid">
                    {games.map((game) => {
                        return <SmallCard key={game.id} Icon={'react'} title={game.name} slug={game.slug} />;
                    })}
                </div>

            </main>
        </div>
    )
}

export default Game;