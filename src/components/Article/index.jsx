import React, { useEffect, useState } from "react";
import ArticleList from "./articleList";

const HEADLINE_API =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=e3222aca48e54226acaaed39e88986b9";

function Article() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArticles(HEADLINE_API);
  }, []);

  const getArticles = (API) => {
    setLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
  };

  const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleonSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getArticles(
        `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=publishedAt&apiKey=e3222aca48e54226acaaed39e88986b9`
      );

      setSearchTerm("");
      setLoading(true);
    } else {
      getArticles(
        `https://newsapi.org/v2/top-headlines?country=id&apiKey=e3222aca48e54226acaaed39e88986b9`
      );
      alert(`err`);
    }
  };

  return (
    <div>
      <form onSubmit={handleonSubmit} className="container">
        <input
          className="form-control mt-5"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnchange}
        />
      </form>
      {loading && <p style={{ textAlign: "center" }}>Loading</p>}
      <div className="container">
        <div className="row all-news">
          {articles.map((article) => (
            <ArticleList key={article.title} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
