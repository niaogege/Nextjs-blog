import Markdown from "markdown-it";
import matter from "gray-matter";
import Error from "next/error";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { getArticleDetail } from "../../lib/db";
import { Article } from "../../types/article";
const Page = ({
  data,
  statusCode,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const md = new Markdown();
  if (!data || statusCode) {
    return <Error statusCode={statusCode} />;
  }
  const result = matter(data?.article_info.mark_content || "");
  return (
    <section className="px-3 mx-auto prose prose-indigo">
      <header className="pt-6">
        <h1>{data?.article_info.title}</h1>
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500">
            <time>
              {new Date(+data.article_info.ctime * 1000).toLocaleDateString(
                "zh-CN",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </time>
          </dd>
        </dl>
        <div className="relative">
          {data.article_info.cover_image && (
            <img
              src={data.article_info.cover_image}
              alt={data.article_info.title}
            />
          )}
        </div>
      </header>
      <article className="prose prose-indigo">
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(result.content),
          }}
        ></div>
      </article>
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.query?.slug as string[];
  const res = await getArticleDetail(slug[0]);

  if (res.err_msg === "success") {
    // 将数据传递到页面上
    return { props: { data: res.data as Article } };
  }

  // 将数据传递到页面上
  return { props: { statusCode: 500 } };
}

export default Page;
