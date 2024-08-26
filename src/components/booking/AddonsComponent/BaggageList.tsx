import React from "react";
import { Text } from "rsuite";
import BackPack from "../../../assets/images/Backpack.svg";
import Image from "next/image";
import TButton from "../../Common/TButton";
import PlusIcon from "@rsuite/icons/Plus";
import MinusIcon from "@rsuite/icons/Minus";

// Define a type for the baggage item
interface BaggageItem {
  title: string;
  price: number;
  isSelected: boolean; // Changed to boolean for better clarity
  quantity: number;
  Image: string;
  value?: number; // Made optional, since it may not be present in every item
}

const baggageTypeList: BaggageItem[] = [
  {
    title: "Additional 3 KG",
    price: 1514,
    isSelected: false,
    quantity: 0,
    value: 3,
    Image: BackPack,
  },
  {
    title: "Additional 5 KG",
    price: 150,
    isSelected: false,
    quantity: 0,
    value: 5, // Added for consistency
    Image: BackPack,
  },
  {
    title: "Additional 10 KG",
    price: 150,
    isSelected: false,
    quantity: 0,
    value: 10, // Added for consistency
    Image: BackPack,
  },
  {
    title: "Additional 15 KG",
    price: 150,
    isSelected: false,
    quantity: 0,
    value: 15, // Added for consistency
    Image: BackPack,
  },
];

const BaggageList: React.FC = () => {
  const [baggageType, setBaggageType] =
    React.useState<BaggageItem[]>(baggageTypeList);
  const [addedValues, setAddedValues] = React.useState<any>(0);

  const handleAddDish = (index: number) => {
    const updatedItems = [...baggageType];
    updatedItems[index].quantity += 1;
    updatedItems[index].isSelected = true; // Update selection state
    setBaggageType(updatedItems); // Update state with modified array
  };

  const handleRemoveDish = (index: number) => {
    const updatedItems = [...baggageType];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1;
      updatedItems[index].isSelected = updatedItems[index].quantity > 0;
      setBaggageType(updatedItems); // Update state with modified array
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          background: "#efefef",
        }}
      >
        <div>
          <div>
            <Text>
              Bangalore <span>&rarr;</span> Delhi
            </Text>
          </div>
          <span>
            <Text muted>{addedValues} kg Added</Text>
          </span>
        </div>

        <div>
          <div>
            <Text weight="semibold">₹350</Text>
          </div>
          <span>Added to fare</span>
        </div>
      </div>
      {baggageType.map((item, i) => (
        <div
          key={i} // If possible, use a unique identifier instead of the index
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid #efefef",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                background: "#efefef",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Image
                src={item.Image}
                alt={`${item.title}`}
                width={55}
                height={55}
              />
            </div>
            <Text size="lg" weight="semibold">
              {item.title}
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Text size="lg" weight="semibold">
              ₹{item.price}
            </Text>
            <>
              <TButton
                type="ghost"
                padding="5px 10px"
                icon={<PlusIcon />}
                onClick={() => handleAddDish(i)}
              />
              {item.quantity}
              <TButton
                type="ghost"
                padding="5px 10px"
                icon={<MinusIcon />}
                onClick={() => handleRemoveDish(i)}
              />
            </>
          </div>
        </div>
      ))}
    </>
  );
};

export default BaggageList;
