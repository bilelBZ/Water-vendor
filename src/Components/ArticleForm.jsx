// src/components/ArticleForm.jsx
import React, { useState } from 'react';
import '../Styles/ArticleForm.css'; // Import the CSS file for styling

// eslint-disable-next-line react/prop-types
const ArticleForm = ({ addArticle }) => {

    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new article object
    const newArticle = {
      id: Date.now(), // You can use a better way to generate unique IDs
      title,
      content,
    };

    // Call the onAddArticle prop to add the new article to the array
    addArticle(newArticle);

    // Clear the form fields
    setTitle('');
    setContent('');
  };

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null,
    author: '',
    publicationDate: '',
    category: '',
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    content: '',
    image: '',
    author: '',
    publicationDate: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: selectedImage,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      image: '',
    }));
  };


  const handleReset = () => {
    setFormData({
      title: '',
      content: '',
      image: null,
      author: '',
      publicationDate: '',
      category: '',
    });
    setFormErrors({
      title: '',
      content: '',
      image: '',
      author: '',
      publicationDate: '',
      category: '',
    });
  };

  return (
      <>
        <div className="form-title">
        <h2>Partagez Vos Idées</h2>
        <p>Rédigez et publiez vos réflexions sur des sujets liés à l'eau</p>
      </div>
    <div className="article-form-container">
      <h2>Ajouter un nouvel article</h2>
      <form onSubmit={handleSubmit} className="article-form">
        <div className="form-group">
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Entrez le titre"
          />
          <span className="error">{formErrors.title}</span>
        </div>

        <div className="form-group">
          <label htmlFor="content">Contenu :</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Rédigez le contenu de votre article (max 500 caractères)"
            rows="5"
          />
          <span className="error">{formErrors.content}</span>
          <div className="character-count">
            {formData.content.length}/5000 caractères
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image :</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <span className="error">{formErrors.image}</span>
          {formData.image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(formData.image)} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="author">Auteur :</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            placeholder="Entrez le nom de l'auteur"
          />
          <span className="error">{formErrors.author}</span>
        </div>

        <div className="form-group">
          <label htmlFor="publicationDate">Date de publication :</label>
          <input
            type="date"
            id="publicationDate"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.publicationDate}</span>
        </div>

        <div className="form-group">
          <label htmlFor="category">Catégorie :</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Entrez la catégorie de l'article"
          />
          <span className="error">{formErrors.category}</span>
        </div>

        <div className="form-group-btn">
          <button type="submit">Ajouter l'article</button>
          <button type="button" onClick={handleReset} className="reset-button">
            Réinitialiser
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ArticleForm;
