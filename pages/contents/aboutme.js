import { projects } from '../../utils/projectsData'
import Aside from '../../components/Aside'
const AboutMe = () => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main className='main-aboutme'>
                <div>
                    <h1>About Me</h1>
                    <img src="/portfolio/sample.png" alt="sample" className='aboutme-icon' />
                    <h2>Profile</h2>
                    〇〇学科の〇回生です。 <br/>
                    ××について研究しています。<br/>
                    △△の仕事に興味があります。<br/>
                    <h2>Skills</h2>
                    <table className='skills-table'>
                        <tr>
                            <th>技術</th><th>経験年数</th><th>スキル</th>
                        </tr>
                        <tr>
                            <td className='icon C-Sharp'>C#</td><td>〇年</td><td>★★★☆☆</td>
                        </tr>
                        <tr>
                            <td className='icon HTML'>HTML</td><td>〇年</td><td>★★★★☆</td>
                        </tr>
                    </table>
                    <h2>保有資格</h2>
                    <p>
                        基本情報技術者
                        ...
                    </p>
                    <h2>などなど</h2>
                </div>
            </main>
        </div>
    )
}

export default AboutMe;