import React, { useState } from "react";
import Burger from "../../assets/images/Burger.svg";
import TTab from "../Common/TTab";
import MealsList from "./AddonsComponent/MealsList";
import { Text } from "rsuite";
import BaggageList from "./AddonsComponent/BaggageList";

const Addons: React.FC = () => {
  const [mealOption, setMealOption] = useState<string>("veg");
  const [mealOptionList, setMealOptionList] = useState<any>({
    veg: [
      { dish: "Veg Burger", price: "270", Image: Burger, quantity: 0 },
      { dish: "French Fries", price: "270", Image: Burger, quantity: 0 },
      { dish: "Fries", price: "270", Image: Burger, quantity: 0 },
      { dish: "Fries", price: "270", Image: Burger, quantity: 0 },
    ],
    non_veg: [
      { dish: "Chicken Burger", price: "370", Image: Burger, quantity: 0 },
      { dish: "French Fries", price: "270", Image: Burger, quantity: 0 },
      { dish: "Fish Fries", price: "270", Image: Burger, quantity: 0 },
      { dish: "Fish Fries", price: "270", Image: Burger, quantity: 0 },
    ],
  });

  const handleFieldChange = (name: string, value: any) => {
    setMealOption(value as string);
  };

  const handleAddDish = (index: number) => {
    setMealOptionList((prevState: any) => {
      const updatedList = { ...prevState };
      updatedList[mealOption][index] = {
        ...updatedList[mealOption][index],
        quantity: updatedList[mealOption][index].quantity + 1,
      };

      return updatedList;
    });
  };

  const handleRemoveDish = (index: number) => {
    setMealOptionList((prevState: any) => {
      const updatedList = { ...prevState };
      if (updatedList[mealOption][index].quantity > 0) {
        updatedList[mealOption][index] = {
          ...updatedList[mealOption][index],
          quantity: updatedList[mealOption][index].quantity - 1,
        };
      }
      return updatedList;
    });
  };

  const field = [
    {
      title: "Meal Preference",
      type: "radio",
      name: "mealOption",
      value: mealOption,
      options: [
        { label: "Veg", value: "veg" },
        { label: "Non-Veg", value: "non_veg" },
      ],
    },
  ];

  const TabNav = [
    {
      title: "Meals",
      key: "Meals",
      content: <MealsList />,
    },
    {
      title: "Baggage",
      key: "Baggage",
      content: <BaggageList />,
    },
    {
      title: "Seat",
      key: "Seat",
      content: (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              padding: "10px",
              background: "#efefef",
            }}
          >
            <div>
              <div>
                Bangalore <span>&rarr;</span> Delhi
              </div>
              <span> --</span>
            </div>
            <div>
              {" "}
              <div>
                <Text weight="semibold">₹350</Text>
              </div>
              <span>Added to fare</span>
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <h3>Upcoming Seats</h3>
            <p>Details about upcoming seats will be displayed here.</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <TTab TabNav={TabNav} />
    </>
  );
};

export default Addons;
