import React from 'react'

function ArticleCard({article}) {
  return (
    <div key={article.id} className="article-card">
          <img src={article.image} alt={article.title} />
          <div className="article-content">
            <h2 className='Card-title' >{article.title}</h2>
            <p>{article.content}</p>
            <p>
              <strong>Date:</strong> {article.date} | <strong>Author:</strong> {article.author}
            </p>
          </div>
        </div>
  )
}

export default ArticleCard