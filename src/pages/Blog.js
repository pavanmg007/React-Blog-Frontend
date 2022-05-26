import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from 'react-moment';
import Layout from "../components/Layout";
import bgimage from "../assests/689-800x500.jpg";

export default function Blog(props) {
  const { category } = props;
  const [data, setData] = useState([]);
  async function getArticles() {
    const response = await axios.get(
      `https://mockend.com/pavanmg007/react-blog/posts?category_eq=${category}`
    );
    if (response.status === 200) {
      setData(response.data);
    } else {
      console.log("API error");
    }
  }

  useEffect(() => {
    getArticles();
  }, [category]);

  return (
    <Layout>
      <div className="md:flex container md:mx-auto md:mt-10">
        <main className="container px-4">
          <h1 className="font-mont font-medium text-2xl mt-10 pb-4 border-orange-600 border-b-2 inline-block">
            {category}
          </h1>
          {data.slice(0, 3).map((e) => {
            return (
              <article className="flex border-b py-10" key={e.id}>
                <div className="flex w-4/5 md:w-1/3">
                  <img src={bgimage} alt="" loading="lazy" />
                </div>
                <div className="ml-5 md:flex md:flex-col md:justify-between">
                  <h1 className="font-mont font-medium text-xl md:text-2xl lg:text-3xl md:w-2/3">{e.title}</h1>
                  <p className="pt-2 font-mont font-medium text-slate-400 md:w-3/4 lg:hidden">
                    {e.body.split(" ").slice(0, 7).join(" ")}
                  </p>
                  <p className="hidden pt-2 font-mont font-medium text-slate-400 lg:w-2/3 lg:text-xl lg:block">
                    {e.body.split(" ").slice(0, 12).join(" ")}
                  </p>
                  <p className="pt-2 font-mont font-medium text-slate-300">
                    <span className="text-slate-800 md:pr-3">{e.category}</span> / <span className="md:pl-3"><Moment format="D MMM YYYY">{e.createdAt}</Moment></span>
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
          <article className="flex flex-col border-b py-10">
            <div className="flex">
              <img src={bgimage} alt="" />
            </div>
            <div className="mt-5">
              <h1 className="font-mont font-medium text-xl">Catch waves with an adventure</h1>
              <p className="pt-2 font-mont font-medium text-slate-400 md:hidden ">
                Gujurat is vastly underated and it's a mystery to us
              </p>
              <p className="pt-10 md:pt-3 font-mont font-medium text-slate-300">
                <span className="text-slate-800">Travel</span> / <span>August 21 2021</span>
              </p>
            </div>
          </article>
          <article className="flex border-b py-10">
            <div className="flex w-2/3">
              <img src={bgimage} alt="" />
            </div>
            <div className="ml-5">
              <h1 className="font-mont font-medium text-xl md:text-base lg:text-xl">
                Catch waves with an adventure
              </h1>
              <p className="pt-2 font-mont font-medium text-slate-400 md:hidden">
                Gujurat is vastly underated and it's a mystery to us
              </p>
              <p className="pt-2 font-mont font-medium text-slate-300">
                <span className="text-slate-800">Travel</span> / <span>August 21 2021</span>
              </p>
            </div>
          </article>
          <article className="flex border-b py-10">
            <div className="flex w-2/3">
              <img src={bgimage} alt="" />
            </div>
            <div className="ml-5">
              <h1 className="font-mont font-medium text-xl">Catch waves with an adventure</h1>
              <p className="pt-2 font-mont font-medium text-slate-400 md:hidden">
                Gujurat is vastly underated and it's a mystery to us
              </p>
              <p className="pt-2 font-mont font-medium text-slate-300">
                <span className="text-slate-800">Travel</span> / <span>August 21 2021</span>
              </p>
            </div>
          </article>
          <article className="flex border-b py-10">
            <div className="flex w-2/3">
              <img src={bgimage} alt="" />
            </div>
            <div className="ml-5">
              <h1 className="font-mont font-medium text-xl">Catch waves with an adventure</h1>
              <p className="pt-2 font-mont font-medium text-slate-400 md:hidden">
                Gujurat is vastly underated and it's a mystery to us
              </p>
              <p className="pt-2 font-mont font-medium text-slate-300">
                <span className="text-slate-800">Travel</span> / <span>August 21 2021</span>
              </p>
            </div>
          </article>
        </aside>
      </div>
    </Layout>
  );
}
