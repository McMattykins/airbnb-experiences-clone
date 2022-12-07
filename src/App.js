import './App.css';
import data from "./data"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
  const cardElem = data.map(
    (card) => (
      <Card 
        key={card.id} 
        {...card} />
    ))
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardElem}
      </section>
    </>
  );
}
