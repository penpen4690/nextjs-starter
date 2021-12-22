import { projects } from '../../utils/projectsData'
import Aside from '../../components/Aside'
import { client } from '../../libs/client';

const Blog = ({ blog }) => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main className='mainblog'>
                <h1>Blog</h1>
                <img src="/mainimage.jpg" alt="mainimage" width={700} height={300} />
                <div className="eprofile-wrapped"> 
                    <div className="eprofile-set">
                        <div className="eprofile-image">
                            <img className="eprofile-face" src="/mainimage.jpg" alt="mainimage" width={50} height={50} />
                        </div>
                        <div className="eprofile-name">
                            <a href=""></a>
                        </div>
                    </div>
                    <div className="eprofile-text">
                            プロフィールの文章
                        </div>
                </div>
                <h2>
                    <a href="/">
                        Back to home
                    </a>
                </h2>
                <div>
                    <ul>
                        {/* {blog.map((blog) => (
                            <li key={blog.id}>
                                <a href={`/contents/blogs/${blog.id}`}>
                                    <img src={blog.titlephoto.url} alt="test" width={100} height={100} />
                                    <h2>{blog.title}</h2>
                                </a>
                            </li>
                        ))} */}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Blog;

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//     const data = await client.get({ endpoint: "blog" });

//     return {
//         props: {
//             blog: data.contents,
//         },
//     };
// };