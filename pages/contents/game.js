import { projects } from '../../utils/projectsData'
import Aside from '../../components/Aside'

const Game = () => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main>
                <div className='games-list'>
                    <h1>Games</h1>
                    <ul>
                        <li>
                            <a href=''>エビカニゲーム🦐🦀</a>
                        </li>
                        <li>
                            <a href=''>〇〇✕✕ゲーム🐇🐢</a>
                        </li>
                        <li>
                            <a href=''>△△◇◇ゲーム🐶🐒</a>
                        </li>
                    </ul>
                </div>
            </main>
        </div >
    )
}

export default Game;