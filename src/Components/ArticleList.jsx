
import React from 'react';
import '../Styles/ArticleList.css'
import Article1 from "../assets/article-1.png"
import Article2 from "../assets/article-é.png"
import Article3 from "../assets/article-3.png"
import ArticleCard from './ArticleCard';
const data = [
  {
    id: 2,
    title: 'Mineral Water Benefits',
    content: `
    Votre satisfaction est au cœur de nos préoccupations, c'est pourquoi nous lançons notre enquête annuelle dédiée à évaluer la qualité de nos services. 
    Chaque année, un panel d'usagers est sélectionné à travers toutes les communes de la Métropole pour partager leurs précieuses impressions. 
    Dans les prochaines semaines, un conseiller prendra contact avec vous pour vous proposer un questionnaire par téléphone d'environ 15 minutes, élaboré en collaboration avec notre partenaire ENOV. 
    Cette enquête, planifiée entre décembre 2023 et janvier 2024, a pour but de recueillir votre avis sur divers aspects, notamment la qualité de service, les factures, et votre consommation d'eau. 
    
    Votre participation à cette enquête est essentielle pour nous permettre de comprendre vos attentes et de continuellement améliorer nos prestations. En partageant vos opinions, vous contribuez directement à façonner l'avenir de nos services. 
    Votre satisfaction est au cœur de nos préoccupations, c'est pourquoi nous lançons notre enquête annuelle dédiée à évaluer la qualité de nos services. 
    Chaque année, un panel d'usagers est sélectionné à travers toutes les communes de la Métropole pour partager leurs précieuses impressions. 
    Dans les prochaines semaines, un conseiller prendra contact avec vous pour vous proposer un questionnaire par téléphone d'environ 15 minutes, élaboré en collaboration avec notre partenaire ENOV. 
    Cette enquête, planifiée entre décembre 2023 et janvier 2024, a pour but de recueillir votre avis sur divers aspects, notamment la qualité de service, les factures, et votre consommation d'eau. 
    
    Votre participation à cette enquête est essentielle pour nous permettre de comprendre vos attentes et de continuellement améliorer nos prestations. En partageant vos opinions, vous contribuez directement à façonner l'avenir de nos services. 
    
    Nous vous remercions sincèrement par avance pour le temps que vous consacrerez à cette enquête. Vos retours sont précieux pour nous aider à mieux répondre à vos besoins.  
    Nous vous remercions sincèrement par avance pour le temps que vous consacrerez à cette enquête. Vos retours sont précieux pour nous aider à mieux répondre à vos besoins.  
      **Health Boosters:**
      - Supports Bone Health
      - Enhances Hydration
      - Rich in Electrolytes

      Explore the myriad benefits of mineral water and discover how it can contribute to your overall well-being.

      *Available in convenient and recyclable packaging.*
    `,
    image:Article1 ,
    date: '2023-12-05',
    author: 'Health Guru',
  },
  {
    id: 3,
    title: 'Purified Water: Clean and Refreshing',
    content: `
    Votre satisfaction est au cœur de nos préoccupations, c'est pourquoi nous lançons notre enquête annuelle dédiée à évaluer la qualité de nos services. 
    Chaque année, un panel d'usagers est sélectionné à travers toutes les communes de la Métropole pour partager leurs précieuses impressions. 
    Dans les prochaines semaines, un conseiller prendra contact avec vous pour vous proposer un questionnaire par téléphone d'environ 15 minutes, élaboré en collaboration avec notre partenaire ENOV. 
    Cette enquête, planifiée entre décembre 2023 et janvier 2024, a pour but de recueillir votre avis sur divers aspects, notamment la qualité de service, les factures, et votre consommation d'eau. 
    Votre satisfaction est au cœur de nos préoccupations, c'est pourquoi nous lançons notre enquête annuelle dédiée à évaluer la qualité de nos services. 
    Chaque année, un panel d'usagers est sélectionné à travers toutes les communes de la Métropole pour partager leurs précieuses impressions. 
    Dans les prochaines semaines, un conseiller prendra contact avec vous pour vous proposer un questionnaire par téléphone d'environ 15 minutes, élaboré en collaboration avec notre partenaire ENOV. 
    Cette enquête, planifiée entre décembre 2023 et janvier 2024, a pour but de recueillir votre avis sur divers aspects, notamment la qualité de service, les factures, et votre consommation d'eau. 
    
    Votre participation à cette enquête est essentielle pour nous permettre de comprendre vos attentes et de continuellement améliorer nos prestations. En partageant vos opinions, vous contribuez directement à façonner l'avenir de nos services. 
    
    Nous vous remercions sincèrement par avance pour le temps que vous consacrerez à cette enquête. Vos retours sont précieux pour nous aider à mieux répondre à vos besoins.  
    Votre participation à cette enquête est essentielle pour nous permettre de comprendre vos attentes et de continuellement améliorer nos prestations. En partageant vos opinions, vous contribuez directement à façonner l'avenir de nos services. 
    
    Nous vous remercions sincèrement par avance pour le temps que vous consacrerez à cette enquête. Vos retours sont précieux pour nous aider à mieux répondre à vos besoins.  

      **Features:**
      - Advanced Filtration
      - Crisp Taste
      - Zero Contaminants

      Experience the difference of truly purified water and embrace the crisp, clean taste you deserve.

      *Available in BPA-free, recyclable bottles.*
    `,
    image: Article2,
    date: '2023-12-10',
    author: 'Clean Water Advocate',
  },
  {
    id: 4,
    title: 'The Essence of Alkaline Water',
    content: `
    Votre satisfaction est au cœur de nos préoccupations, c'est pourquoi nous lançons notre enquête annuelle dédiée à évaluer la qualité de nos services. 
    Chaque année, un panel d'usagers est sélectionné à travers toutes les communes de la Métropole pour partager leurs précieuses impressions. 
    Dans les prochaines semaines, un conseiller prendra contact avec vous pour vous proposer un questionnaire par téléphone d'environ 15 minutes, élaboré en collaboration avec notre partenaire ENOV. 
    Cette enquête, planifiée entre décembre 2023 et janvier 2024, a pour but de recueillir votre avis sur divers aspects, notamment la qualité de service, les factures, et votre consommation d'eau. 
    
    Votre participation à cette enquête est essentielle pour nous permettre de comprendre vos attentes et de continuellement améliorer nos prestations. En partageant vos opinions, vous contribuez directement à façonner l'avenir de nos services. 
    Votre satisfaction est au cœur de nos préoccupations, c'est pourquoi nous lançons notre enquête annuelle dédiée à évaluer la qualité de nos services. 
    Chaque année, un panel d'usagers est sélectionné à travers toutes les communes de la Métropole pour partager leurs précieuses impressions. 
    Dans les prochaines semaines, un conseiller prendra contact avec vous pour vous proposer un questionnaire par téléphone d'environ 15 minutes, élaboré en collaboration avec notre partenaire ENOV. 
    Cette enquête, planifiée entre décembre 2023 et janvier 2024, a pour but de recueillir votre avis sur divers aspects, notamment la qualité de service, les factures, et votre consommation d'eau. 
    
    Votre participation à cette enquête est essentielle pour nous permettre de comprendre vos attentes et de continuellement améliorer nos prestations. En partageant vos opinions, vous contribuez directement à façonner l'avenir de nos services. 
    
    Nous vous remercions sincèrement par avance pour le temps que vous consacrerez à cette enquête. Vos retours sont précieux pour nous aider à mieux répondre à vos besoins.  
    Nous vous remercions sincèrement par avance pour le temps que vous consacrerez à cette enquête. Vos retours sont précieux pour nous aider à mieux répondre à vos besoins.  
      **Benefits:**
      - pH Balance
      - Antioxidant Properties
      - Enhanced Hydration

      Delve into the world of alkaline water and discover the wellness it can bring to your daily life.

      *Available in eco-conscious packaging.*
    `,
    image: Article3,
    date: '2023-12-15',
    author: 'Wellness Enthusiast',
  },
  // Add more articles as needed
];
const ArticleData = () => {
  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"25px",margin:"40px"}} > Articles</h1>
      {data.map((article,i) => (
        <ArticleCard  key={i} article={article}/>
      ))}
    </div>
  );
};


export default ArticleData;
