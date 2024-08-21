import React, { useState } from "react";
import { Accordion, Panel, InputGroup, Input, Radio, Tag, RadioGroup } from "rsuite";
import Image from "next/image";
import InfoIcon from "../../assets/icons/InfoIcon.svg";
import WhatsApp from "../../assets/icons/WhatsApp.svg";
import Gmail from "../../assets/icons/Gmail.svg";
import Burger from "../../assets/images/Burger.svg";

// Define the AddonsAccordion component
const AddonsAccordion: React.FC = () => {
    const [selectedNav, setSelectedNav] = useState<string>("Meals");
    const [mealOption, setMealOption] = useState<string>("Veg");

    const handleChange = (value: any, event: React.SyntheticEvent<Element, Event>) => {
        setMealOption(value as string);
       
    };

    return (
        <div>
            <nav style={{ marginBottom: "20px", borderBottom: "1px solid lightgrey" }}>
                <div
                    style={navItemStyle(selectedNav === "Meals")}
                    onClick={() => setSelectedNav("Meals")}
                >
                    Meals
                </div>
                <div
                    style={navItemStyle(selectedNav === "Baggage")}
                    onClick={() => setSelectedNav("Baggage")}
                >
                    Baggage
                </div>
                <div
                    style={navItemStyle(selectedNav === "Seat")}
                    onClick={() => setSelectedNav("Seat")}
                >
                    Seat
                </div>
            </nav>

            {selectedNav === "Meals" && (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                        <div>Bangalore <span>&rarr;</span> Delhi</div>
                        <div>Price: ₹350</div>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <RadioGroup
                            value={mealOption}
                            onChange={handleChange}
                            inline
                        >
                            <Radio value="Veg">Veg</Radio>
                            <Radio value="Non-Veg">Non-Veg</Radio>
                        </RadioGroup>
                    </div>
                    {mealOption === "Veg" && (
                        <div style={cardContainerStyle}>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} style={cardStyle}>
                                    <Image src={Burger} alt="Example Image" style={{ borderRadius: "8px" }} />
                                    <div style={{ padding: "10px", textAlign: "center" }}>
                                        <div>Name of Dish</div>
                                        <div>₹Price</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
            
            {selectedNav === "Baggage" && (
                <div style={{ padding: "20px" }}>
                    <h3>Upcoming Baggage</h3>
                    <p>Details about upcoming baggage will be displayed here.</p>
                </div>
            )}
            
            {selectedNav === "Seat" && (
                <div style={{ padding: "20px" }}>
                    <h3>Upcoming Seats</h3>
                    <p>Details about upcoming seats will be displayed here.</p>
                </div>
            )}
        </div>
    );
};

const accordionData = [
  {
    header: "Passenger Information",
    fields: [
      { title: "Title", placeholder: "Mr/Ms/Mrs" },
      { title: "First Name", placeholder: "First Name" },
      { title: "Last Name", placeholder: "Last Name" },
      { title: "Mobile Number", placeholder: "Mobile Number" },
      { title: "Email ID", placeholder: "Email ID" },
    ],
  },
  {
    header: "GST Details for Business travel (Optional)",
    fields: [
      { title: "GSTIN", placeholder: "GSTIN" },
      { title: "GSTIN Mobile Number", placeholder: "GSTIN Mobile Number" },
      { title: "GSTIN Email Addresss", placeholder: "GSTIN Email Addresss" },
      { title: "GSTIN Phone Number", placeholder: "GSTIN Phone Number" },
    ],
  },
  {
    header: "Share and Confirm",
    fields: [],
    additionalContent: (
      <div style={{ padding: "10px" }}>
        <p style={{ marginBottom: "15px" }}>
          Share the entered details to customer so that they can verify and confirm.
        </p>
        <Tag>
          <Image src={WhatsApp} alt="WhatsApp Icon" width={24} height={24} />
          <span>WhatsApp</span>
        </Tag>
        <Tag>
          <Image src={Gmail} alt="Gmail Icon" width={22} height={22} />
          <span style={{ marginLeft: "5px" }}>Gmail</span>
        </Tag>
      </div>
    ),
  },
  {
    header: "Addons (Optional)",
    fields: [],
    additionalContent: <AddonsAccordion />,
  },
];

const PassengerDetailsAccordion: React.FC = () => {
    return (
        <div>
            {accordionData.map((data, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid lightgrey",
                        padding: "10px",
                        borderRadius: "8px",
                        marginTop: "50px",
                    }}
                >
                    <Accordion>
                        <Panel
                            header={data.header}
                            defaultExpanded 
                            style={{ width: "100%" }}
                        >
                            {data.fields.length > 0 ? (
                                <div style={rowStyle}>
                                    {data.fields.map((field, idx) => (
                                        <InputField
                                            key={idx}
                                            title={field.title}
                                            placeholder={field.placeholder}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div>{data.additionalContent}</div>
                            )}
                            {index < accordionData.length - 1 && (
                                <div style={infoBoxStyle}>
                                    <Image src={InfoIcon} alt="Info Icon" width={24} height={24} />
                                    <span>
                                        These details will be passed to the Airlines for booking
                                    </span>
                                </div>
                            )}
                        </Panel>
                    </Accordion>
                </div>
            ))}
        </div>
    );
};

const rowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
};

const InputField: React.FC<{ title: string; placeholder: string }> = ({
    title,
    placeholder,
}) => (
    <div style={{ flex: 1, minWidth: "150px", maxWidth: "200px" }}>
        <div
            style={{
                marginBottom: "4px",
                color: "grey",
            }}
        >
            {title}
        </div>
        <InputGroup inside style={{ width: "100%" }}>
            <Input placeholder={placeholder} />
        </InputGroup>
    </div>
);

const infoBoxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginTop: "15px",
    padding: "10px",
    borderRadius: "52px",
    backgroundColor: "#f7f7f7",
    border: "1px solid lightgrey",
    gap: "10px",
};

const navItemStyle = (isSelected: boolean): React.CSSProperties => ({
    display: "inline-block",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: isSelected ? "bold" : "normal",
    borderBottom: isSelected ? "2px solid #007bff" : "none",
});

const cardContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
};

const cardStyle: React.CSSProperties = {
    flex: "1 1 200px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "#fff",
};

export default PassengerDetailsAccordion;
