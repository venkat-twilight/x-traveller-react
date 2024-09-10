import React, { useState } from "react";
import Image from "next/image";
import Burger from "../../../assets/images/Burger.svg";
import PlusIcon from "@rsuite/icons/Plus";
import MinusIcon from "@rsuite/icons/Minus";
import TButton from "../../Common/TButton";
import { Text } from "rsuite";
import TFrom from "../../Common/TFrom";

// Define types for meal items and options
interface MealItem {
  dish: string;
  price: number;
  isSelected: number; // 0 or 1 to indicate selection
  quantity: number;
  Image: string; // Replace with the correct type for your images if needed
}

interface MealOptionList {
  veg: MealItem[];
  non_veg: MealItem[];
}

// Example meal option data - replace with actual data or props
const mealOptionList: MealOptionList = {
  veg: [
    {
      dish: "Veg Burger",
      price: 270,
      isSelected: 0,
      quantity: 0,
      Image: Burger,
    },
    {
      dish: "French Fries",
      price: 150,
      isSelected: 0,
      quantity: 0,
      Image: Burger,
    },
    {
      dish: "French Fries",
      price: 150,
      isSelected: 0,
      quantity: 0,
      Image: Burger,
    },
    {
      dish: "French Fries",
      price: 150,
      isSelected: 0,
      quantity: 0,
      Image: Burger,
    },
  ],
  non_veg: [
    {
      dish: "Chicken Burger",
      price: 300,
      isSelected: 0,
      quantity: 0,
      Image: Burger,
    },
    {
      dish: "Fish and Chips",
      price: 320,
      isSelected: 0,
      quantity: 0,
      Image: Burger,
    },
  ],
};

const MealsList = () => {
  const [mealOption, setMealOption] = useState<"veg" | "non_veg">("veg");
  const [mealItems, setMealItems] = useState<MealOptionList>(mealOptionList);
  const [totalPrice, setTotalPrice] = useState<number>(350);
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
  const updateTotalPrice = (updatedItems: MealItem[]) => {
    const newTotalPrice = updatedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      350 // Starting price
    );
    setTotalPrice(newTotalPrice); // Update total price
  };

  const handleAddDish = (index: number) => {
    const updatedItems = [...mealItems[mealOption]];
    updatedItems[index].quantity += 1;
    updatedItems[index].isSelected = 1; // Update selection state
    setMealItems({ ...mealItems, [mealOption]: updatedItems });
    updateTotalPrice(updatedItems); // Update price after adding
  };

  const handleRemoveDish = (index: number) => {
    const updatedItems = [...mealItems[mealOption]];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1;
      updatedItems[index].isSelected = updatedItems[index].quantity > 0 ? 1 : 0;
      setMealItems({ ...mealItems, [mealOption]: updatedItems });
      updateTotalPrice(updatedItems); // Update price after removing
    }
  };

  const getInputSelectedState = (): number => {
    const selectedItems = mealItems[mealOption].filter(
      (item: MealItem) => item.isSelected === 1
    );
    return selectedItems.length;
  };

  const handleFieldChange = (name: string, value: any) => {
    setMealOption(value);
  };

  return (
    <div>
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
          <span>
            {getInputSelectedState()} <span>&rarr;</span>{" "}
            {mealItems[mealOption].length} items selected
          </span>
        </div>
        <div>
          {" "}
          <div>
            <Text weight="semibold">₹{totalPrice}</Text>
          </div>
          <span>Added to fare</span>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        {field.map((field, idx) => (
          <TFrom
            key={idx}
            title={field.title}
            name={field.name}
            value={field.value}
            type={field.type as "input" | "select" | "checkbox"}
            options={field.options}
            onChange={handleFieldChange}
          />
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mealItems[mealOption].map((item: MealItem, index: number) => (
          <div
            key={index}
            style={{
              flex: "1 1 20%",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Image
              src={item.Image}
              alt={item.dish}
              style={{ borderRadius: "8px" }}
            />
            <div
              style={{
                display: "flex",
                padding: "10px",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "18px" }}>{item.dish}</div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    flexShrink: 0,
                  }}
                >
                  ₹{item.price}
                </div>
              </div>
              {item.quantity < 1 ? (
                <TButton
                  padding="5px 10px"
                  label="Add"
                  onClick={() => handleAddDish(index)}
                />
              ) : (
                <>
                  <TButton
                    type="ghost"
                    padding="5px 10px"
                    icon={<MinusIcon />}
                    onClick={() => handleRemoveDish(index)}
                  />
                  {item.quantity}
                  <TButton
                    type="ghost"
                    padding="5px 10px"
                    icon={<PlusIcon />}
                    onClick={() => handleAddDish(index)}
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsList;
