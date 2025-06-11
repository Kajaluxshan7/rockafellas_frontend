"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "@mui/material/Button";
import OrderStatus from "../components/OrderStatus";
export default function HomePage() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <main className="p-8 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <section className="max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
            Welcome to Rockafellas Restaurant
          </h1>
          <OrderStatus />
        </header>

        <Button
          variant="contained"
          onClick={toggleDarkMode}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          className="mb-8 shadow-lg hover:scale-105 transition-transform duration-200"
          size="large"
        >
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </Button>

        <p className="text-lg sm:text-xl max-w-prose leading-relaxed">
          Enjoy the best food with the convenience of online ordering.
        </p>
      </section>
    </main>
  );
}
