import { games } from '../../utils/gameData';
import SmallCard from '../../components/SmallCard';
import { projects } from '../../utils/projectsData'
import Aside from '../../utils/aside'

const Game = () => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main>
                <h1>Game</h1>
                <div className="project-card-grid">
                    {games.map((game) => {
                        return <SmallCard key={game.id} Icon={'react'} title={game.name} path={game.path} />;
                    })}
                </div>
                <h2>
                    <a href="/">
                        Back to home
                    </a>
                </h2>
            </main >
        </div>

    )
}

export default Game;