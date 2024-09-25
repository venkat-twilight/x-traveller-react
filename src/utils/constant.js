import React from "react";
import PropTypes from "prop-types";

export const LOGIN = "/login";
export const REGISTER = "/register";
export const HOME = "/home";

export const TravelAgentList = [
  {
    number: 1,
    fontColor: "#564FFD",
    color: "#FD6922",
    text: "Fill in the join us form",
  },
  {
    number: 2,
    fontColor: "#E34444",
    color: "#68B7FF",
    text: "Send us your documents",
  },
  {
    number: 3,
    fontColor: "#50C878",
    color: "#50C878",
    text: "Receive your authorized license and start your travel business",
  },
];

export const AdvantagesList = [
  {
    color: "#68B7FF",
    class: "steperOne",
    title: "Get easy access to booking and payment records",
  },
  {
    color: "#85E0A3",
    title: "Manage easy post-booking modifications on flights",
  },
  {
    color: "#E6E6E6",
    title: "Safe and hygienic stays with MySafety compliant properties",
  },
  {
    color: "#FFAFA3",
    title: "Share options directly with your audience on WhatsApp",
  },
  {
    color: "#FFC470",
    title: "Enjoy the best-in-class cancellation policies on hotels",
  },
  {
    color: "#D9B8FF",
    title: "Get booking confirmations printed under your agency’s logo",
  },
];

export const PassengerFields = [
  {
    title: "Search Criteria",
    placeholder: "Reference No",
    type: "select",
    name: "title",
    options: [
      { label: "100", value: "100" },
      { label: "101", value: "101" },
      { label: "102", value: "102" },
    ],
  },
  {
    title: "Search",
    placeholder: "Search Text",
    type: "input",
    name: "Search",
  },
  {
    title: "Service",
    placeholder: "flight",
    type: "select",
    name: "Service",
    options: [
      { label: "flight", value: "flight" },
      { label: "hotel", value: "hotel" },
    ],
  },
  {
    title: "Airline",
    placeholder: "Airline",
    type: "select",
    name: "Airline",
    options: [
      { label: "Indigo", value: "indigo" },
      { label: "Air Vistara", value: "airvistara" },
    ],
  },
  {
    title: "Status",
    placeholder: "All",
    type: "select",
    name: "Status",
    options: [
      { label: "Indigo", value: "indigo" },
      { label: "Air Vistara", value: "airvistara" },
    ],
  },
];

export const planDetails = [
  {
    title: "3 Years",
    priceMonthly: "₹50,000",
    priceTotal: "₹150,000",
    description: "Everything you need to get started",
    features: [
      "Basic online booking system",
      "Priority Support 24/7",
      "WhatsApp support",
      "Sales Representative support",
      "Email notifications for new bookings",
      "Advanced analytics and reporting",
      "Annual renewal charges ₹ 3000",
      "Marketing automation tools",
    ],
  },
  {
    title: "1 Year",
    priceMonthly: "₹40,000",
    priceTotal: "₹120,000",
    description: "Everything you need to get started",
    features: [
      "Basic online booking system",
      "Priority Support 24/7",
      "Email notifications for new bookings",
      "Advanced analytics and reporting",
      "Annual renewal charges ₹ 2000",
    ],
  },
  {
    title: "6 Months",
    priceMonthly: "₹30,000",
    priceTotal: "₹90,000",
    description: "A great starter package",
    features: [
      "Basic online booking system",
      "WhatsApp support",
      "Email notifications for new bookings",
      "Annual renewal charges ₹ 1500",
    ],
  },
];
