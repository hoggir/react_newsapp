import React from "react";
import "./articleList.css";

const ArticleList = ({
  url,
  title,
  urlToImage,
  publishedAt,
  description,
  author
}) => (
  <div className="col-md-3 my-5">
    <div className="card">
      <img src={urlToImage} alt="" />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="tx-publised">
        {author} - {publishedAt}
        </p>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          Details
        </a>
      </div>
    </div>
  </div>
);

export default ArticleList;
