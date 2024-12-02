import React from "react";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={news?.image_url}
                alt=""
                className="rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-white">All news in this Category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
