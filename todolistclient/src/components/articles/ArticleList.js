import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../app.css";
import "./todo-list-styles.css";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(function() {
    async function getArticles() {
      try {
        const response = await axios.get("/api/articles");
        setArticles(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getArticles();
  }, []);

  return (
    <div>
      <div>
        <div className="todo-question d-flex flex-row justify-content-center">
          <div class="p-2">
            <p>What do you need to do?</p>
          </div>
          <div class="p-2">
            <Link to="/articles/new" className="btn btn-success add-btn">
              Add todo
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div>
        {articles.map(article => {
          return (
            <div className="card todo-items" key={article._id}>
              <h6 className="todo-item-links">
                <Link to={`/articles/${article._id}`}>{article.title}</Link>
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleList;
