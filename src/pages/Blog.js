import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import Layout from "../components/Layout";
import { useParams, NavLink } from "react-router-dom";

export default function Blog() {
  const { categoryid } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getArticles() {
    setLoading(true);
    const response = await axios.get(
      `https://mockend.com/pavanmg007/react-blog/posts?category_eq=${categoryid}`
    );
    if (response.status === 200) {
      setData(response.data);
      setLoading(false);
    } else {
      console.log("API error");
      setLoading(true);
    }
  }
  useEffect(() => {
    getArticles();
  }, [categoryid]);

  return (
    <Layout>
      <div className="md:flex container md:mx-auto md:mt-10">
        <main className="container px-4">
          <h1 className="font-mont font-medium text-2xl mt-10 pb-4 border-orange-600 border-b-2 inline-block">
            {categoryid.toUpperCase()}
          </h1>
          {loading && (
            <div class="flex px-5 w-min mx-auto py-20 md:py-40">
              <svg
                className="animate-spin w-10 inline-block mr-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="inline-block text-3xl">Loading...</p>
            </div>
          )}
          {data.slice(0, 10).map((e) => {
            return (
              <article className="flex border-b py-10" key={e.id}>
                <div className="flex w-4/5 md:w-1/3">
                  <img src={e.cover} className="md:max-w-xs" alt="" loading="lazy" />
                </div>
                <div className="ml-5 md:flex md:flex-col md:justify-between">
                  <h1 className="font-mont font-medium text-xl md:text-2xl lg:text-3xl md:w-2/3">
                    <NavLink
                      state={{
                        title: e.title,
                        cover: e.cover,
                        content: e.body,
                        likes: e.likes,
                        date: e.createdAt,
                        category: e.category,
                        author: e.author,
                      }}
                      to={`article/${e.id}`}
                    >
                      {e.title}
                    </NavLink>
                  </h1>
                  <p className="pt-2 font-mont font-medium text-slate-400 md:w-3/4 lg:hidden">
                    {e.body.split(" ").slice(0, 7).join(" ")}
                  </p>
                  <p className="hidden pt-2 font-mont font-medium text-slate-400 lg:w-2/3 lg:text-xl lg:block">
                    {e.body.split(" ").slice(0, 12).join(" ")}
                  </p>
                  <p className="pt-2 font-mont font-medium text-slate-300">
                    <span className="text-slate-800 md:pr-3">{e.category}</span> /{" "}
                    <span className="md:pl-3">
                      <Moment format="D MMM YYYY">{e.createdAt}</Moment>
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </main>
        <aside className="container px-4 md:w-1/3">
          <h1 className="font-mont font-medium text-2xl mt-10 pb-4 border-orange-600 border-b-2 inline-block">
            Top Posts
          </h1>
          {loading && (
            <div class="flex px-5 w-min mx-auto py-20 md:py-40">
              <svg
                className="animate-spin w-8 inline-block mr-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="inline-block text-3xl">Loading...</p>
            </div>
          )}
          {data.slice(9, 13).map((e) => {
            return (
              <article className="flex border-b py-10" key={e.id}>
                <div className="flex w-2/3">
                  <img src={e.cover} alt="" />
                </div>
                <div className="ml-5">
                  <h1 className="font-mont font-medium text-xl">
                    <NavLink
                      state={{
                        title: e.title,
                        cover: e.cover,
                        content: e.body,
                        likes: e.likes,
                        date: e.createdAt,
                        category: e.category,
                        author: e.author,
                      }}
                      to={`article/${e.id}`}
                    >
                      {e.title}
                    </NavLink>
                  </h1>
                  <p className="pt-2 font-mont font-medium text-slate-300">
                    <span className="text-slate-800">{e.category}</span> /{" "}
                    <span>
                      <Moment format="D MMM YYYY">{e.createdAt}</Moment>
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </aside>
      </div>
    </Layout>
  );
}
