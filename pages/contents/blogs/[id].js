import { projects } from '../../../utils/projectsData';
import Aside from '../../../components/Aside';
import { client } from '../../../libs/client';

const BlogId = ({ blog }) => {
    return (
        <div className="project">
            <aside>
                <Aside projects={projects} />
            </aside>
            <main className='mainblog'>
                <h1>Blog</h1>
                <h2>
                    <a href="/contents/blog">
                        Back to blog
                    </a>
                </h2>
                <h1 className="title">{blog.title}</h1>
                <p className="publishedAt">{convertDay(blog.publishedAt)}</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: `${blog.body}`,
                    }}
                />
            </main>
        </div>
    )
}

/** 日付を日本時間に変換 */
const convertDay = day => {
    const date = new Date(day);

    var year_str = date.getFullYear();
    //月だけ+1すること
    var month_str = 1 + date.getMonth();
    var day_str = date.getDate();
    var hour_str = date.getHours();
    var minute_str = date.getMinutes();
    var second_str = date.getSeconds();


    var format_str = 'YYYY-MM-DD hh:mm:ss';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);
    format_str = format_str.replace(/hh/g, hour_str);
    format_str = format_str.replace(/mm/g, minute_str);
    format_str = format_str.replace(/ss/g, second_str);
    return format_str;
}

export default BlogId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/contents//${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};