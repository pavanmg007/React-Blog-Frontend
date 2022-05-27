import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import avatar from "../assests/face.png";
import Moment from "react-moment";
import clap from "../assests/hand.jpg";

export default function SingleBlog() {
  const location = useLocation();
  const { title, cover, content, likes, date, category, author } = location.state;
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <section className="container mx-auto md:w-1/2">
        <article className="px-5">
          <h1 className="text-xl font-mont mt-5 md:text-2xl lg:text-3xl">{title}</h1>
          <div className="md:flex flex-row-reverse md:w-full justify-between items-center">
            <div>
              <ul className="flex w-1/3 md:w-20 lg:w-28 mt-2 cursor-pointer">
                <li>
                  <img src="https://img.icons8.com/ios-filled/2x/facebook--v1.png" alt="" />
                </li>
                <li>
                  <img src="https://img.icons8.com/ios-filled/2x/twitter-squared.png" alt="" />
                </li>
                <li>
                  <img src="https://img.icons8.com/ios-filled/2x/linkedin.png" alt="" />
                </li>
                <li>
                  <img src="https://img.icons8.com/ios-filled/2x/youtube-squared.png" alt="" />
                </li>
              </ul>
            </div>
            <div className="flex items-center mt-5">
              <img className="w-16" src={avatar} alt="" />
              <div className="ml-5">
                <h2 className="font-mont">{author}</h2>
                <h3 className="text-slate-400 mt-2">
                  <Moment format="D MMM YYYY">{date}</Moment> / 10 min read
                </h3>
              </div>
            </div>
          </div>
          <img className="mt-8 w-full" src={cover} alt="" />
          <p className="mt-5 font-opensans text-lg">{content}</p>
          <div className="bg-slate-200 inline-block px-4 py-2 mr-3 mt-5 rounded-md">
            <p className="text-slate-400">{category.toUpperCase()}</p>
          </div>
          <div className="flex items-center mt-5 mb-10">
            <img className="w-14 mr-2" src={clap} alt="" />
            <p className="text-slate-400 text-lg">{kFormatter(likes)} Claps</p>
          </div>
          <div className="flex items-center mt-5 mb-5 border-y py-5">
            <img className="w-20" src={avatar} alt="" />
            <div className="ml-5 flex flex-col justify-between">
              <h3 className="text-slate-400 uppercase">Written By</h3>
              <h2 className="font-mont my-1 text-lg">{author}</h2>
              <h3 className="text-slate-400">
                <Moment format="D MMM YYYY">{date}</Moment>
              </h3>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}
