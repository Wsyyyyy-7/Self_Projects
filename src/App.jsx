import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import "./App.css"
import Container from './components/Container';
import InnerContainer from './components/innerContainer';
import FoodDetails from './components/foodDetails';


function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329")
  return <div className = "App">
    <Nav />
    <Search foodData  = {foodData} setFoodData ={setFoodData}/>
    <Container>
      <InnerContainer>
          <FoodList setFoodID={setFoodID} foodData={foodData}/>
      </InnerContainer>
      <InnerContainer>
        <FoodDetails foodID = {foodID}/>
      </InnerContainer>
    </Container>
  </div>
}

export default App
