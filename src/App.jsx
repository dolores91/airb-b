
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import data from "./data.js"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
        /*OTRA FORMA {...item}*/
      />
    )
  })
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      {cards}
    </div>
  )
}

export default App
