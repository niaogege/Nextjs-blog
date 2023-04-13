import React from "react";
import { GetServerSidePropsContext } from "next";
import { getArticles } from "../../lib/db";
import { InferGetServerSidePropsType } from "next";
import ArticleList from "../../components/ArticleList";
import { NextPageWithLayout } from "@/types/page";
import { Layout } from "@/components/layout";

function Page({
  data,
  count,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <ArticleList articles={data} currentPage={page} totalPages={count} />;
}

// 每次刷新页面都后执行这个函数
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = (context.query?.page as string) || 1;
  // 通过 API 请求数据
  const uid = process.env.uid!;
  const { data, count } = await getArticles(uid, (+page - 1) * 10);

  // 将数据传递到页面上
  return { props: { data, count, page: +page } };
}

(Page as NextPageWithLayout).getLayout = function getLayout(
  page: React.ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default Page;
