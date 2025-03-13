import './App.css'
import ImageSlider from './Components/ImageSlider'
import Navbar from './Components/Navbar'
import LoginForm from './Pages/LoginForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WaterSimulator from './Components/WaterSimulator';
import Footer from './Components/Footer';
import { useState } from 'react';
import ArticleForm from './Components/ArticleForm';
import ArticleData from './Components/ArticleList';

function App() {
  const [allArticles, setAllArticles] = useState([]);

  // Function to add a new article
  const addArticle = (newArticle) => {
    setAllArticles([...allArticles, newArticle]);
  };
  console.log(allArticles)

  return (
    <>
    <BrowserRouter>
    <Navbar/> 
      <Routes>
        <Route path="/home" element={<ImageSlider/>}/>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/simulator" element={<WaterSimulator/>} />
        <Route path='/AddArticle' element={<ArticleForm AllArticles={allArticles} addArticle={addArticle} />}/>
        <Route path='/articles' element={<ArticleData AllArticles={allArticles} addArticle={addArticle} />}/>
      </Routes>
    </BrowserRouter>
    <Footer/> 
    </>
  )
}

export default App
