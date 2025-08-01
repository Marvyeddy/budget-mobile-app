import { Platform } from "react-native";

//OS Platforms
export const ANDROID = Platform.OS === "android";
export const IOS = Platform.OS === "ios";

//Currencies
export const currencies = [
  { id: "1", code: "CAD", flag: "🇨🇦", sign: "CA$" },
  { id: "2", code: "GBP", flag: "🇬🇧", sign: "£" },
  { id: "3", code: "NGN", flag: "🇳🇬", sign: "₦" },
  { id: "4", code: "EUR", flag: "🇪🇺", sign: "£" },
  { id: "5", code: "AUD", flag: "🇦🇺", sign: "A$" },
  { id: "6", code: "USD", flag: "🇺🇸", sign: "$" },
  { id: "7", code: "GHS", flag: "🇬🇭", sign: "₵" },
];

export const budget = [
  { id: "1", image: "🏠", title: "Rent", percentage: "6.7%", amount: "£306" },
  {
    id: "2",
    image: "🍱",
    title: "Food & Groceries",
    percentage: "10%",
    amount: "£450",
  },
  { id: "3", image: "⛪️", title: "Tithe", percentage: "10%", amount: "£450" },
  {
    id: "4",
    image: "🚨",
    title: "Emergency",
    percentage: "6%",
    amount: "£270",
  },
  {
    id: "5",
    image: "💹",
    title: "Investments",
    percentage: "18%",
    amount: "£608",
  },
];

export const searchOptions = [
  { id: "1", title: "Extravaganza" },
  { id: "2", title: "Contravention" },
  { id: "3", title: "Travelation" },
  { id: "4", title: "Travelware" },
  { id: "5", title: "Travelware" },
  { id: "6", title: "Travelware" },
];
