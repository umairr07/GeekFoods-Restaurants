import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Restaurants } from "./components/Restaurants";
import { data } from "./utils/RestaurantData";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(1);

  return (
    <div>
      <Header />
      <>
        <div>
          <div className="flex justify-between items-center mt-5">
            <input
              type="text"
              placeholder="Search for restaurants"
              className="border-2 w-[300px] ml-10 p-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex gap-3 mr-10 items-center">
              <p>Minimum Rating : </p>
              <input
                type="number"
                className="border-2 w-[75px] p-2"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-10 mt-10 ">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((item, idx) => {
              return (
                <Restaurants
                  key={idx}
                  resName={item.name}
                  rating={item.rating}
                  address={item.address}
                  outcode={item.outcode}
                  postcode={item.postcode}
                  typeOfFoods={item.type_of_food}
                  visitMenu={item.URL}
                />
              );
            })}
        </div>
      </>
      <Footer />
    </div>
  );
}

export default App;
