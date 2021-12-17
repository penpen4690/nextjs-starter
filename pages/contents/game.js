import { projects } from '../../utils/projectsData'
import { games } from '../../utils/gamesData'
import SmallCard from '../../components/SmallCard';

const Game = () => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main>
                <h1>Games</h1>
                <div className="contents-card-grid">
                    {games.map((game) => {
                        return <SmallCard key={game.id} Icon={'react'} title={game.name} slug={game.slug} />;
                    })}
                </div>

            </main>
        </div >
    )
}

export default Game;