"use client";

import FadeIn from "../../components/FadeIn";
import { newsData } from "./newsData";
import NewsCard from "../NewsCard/page";
import TitleWithDescription from "../../components/TitleWithDescription";
import AngledSpacer from "../../components/AngledSpacer";

export default function News() {
  return (
    <div id="news" className="bg-base-200 pt-6">
      <AngledSpacer />
      <TitleWithDescription 
        title="News" 
        description="Stay updated with the latest in esports and fighting game tournaments through Team StrikeFirst's 'News' section. Explore game highlights, tournament results, and exclusive insights into our journey, all in one place."
      />
      <section className="bg-base-200">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 bg-base-200 p-4 mx-auto max-w-8xl">
          {newsData.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </section>
      <div className="flex justify-center">
        <button
          type="button"
          className="px-6 py-4 text-sm rounded-sm hover:underline bg-base-100 text-base-content"
        >
          Load more posts...
        </button>
      </div>
    </div>
  );
}
