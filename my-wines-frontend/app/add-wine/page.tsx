"use client";

import React, { useState } from "react";

const AddWinePage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [year, setYear] = useState<number | "">("");
  const [type, setType] = useState<string>("RED");
  const [varietal, setVarietal] = useState<string>("CABERNET_SAUVIGNON");
  const [rating, setRating] = useState<number | "">("");
  const [consumed, setConsumed] = useState<boolean>(false);
  const [dateConsumed, setDateConsumed] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const wineData = {
      name,
      year: Number(year),
      type,
      varietal,
      rating: rating ? Number(rating) : null,
      consumed,
      dateConsumed: consumed ? dateConsumed : null,
    };

    console.log("Wine Data:", wineData);

    // Replace this with your API endpoint
    try {
      const response = await fetch("/api/wines/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wineData),
      });

      if (response.ok) {
        alert("Wine added successfully!");
        // Reset form
        setName("");
        setYear("");
        setType("RED");
        setVarietal("CABERNET_SAUVIGNON");
        setRating("");
        setConsumed(false);
        setDateConsumed("");
      } else {
        alert("Failed to add wine.");
      }
    } catch (error) {
      console.error("Error adding wine:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg mt-5 mb-5">
        <h2 className="text-2xl font-bold text-center mb-6">Add a New Wine</h2>
        <form  className='mt-3' onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Year Field */}
          <div className="mb-4">
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value ? Number(e.target.value) : "")}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Type Field */}
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="RED">Red</option>
              <option value="WHITE">White</option>
              <option value="ROSE">Rosé</option>
              <option value="WHITE_BLEND">White Blend</option>
              <option value="RED_BLEND">Red Blend</option>
            </select>
          </div>

          {/* Varietal Field */}
          <div className="mb-4">
            <label htmlFor="varietal" className="block text-sm font-medium text-gray-700">
              Varietal
            </label>
            <select
              id="varietal"
              value={varietal}
              onChange={(e) => setVarietal(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="CABERNET_SAUVIGNON">Cabernet Sauvignon</option>
              <option value="MERLOT">Merlot</option>
              <option value="SHIRAZ">Shiraz</option>
              <option value="CHENIN_BLANC">Chenin Blanc</option>
              <option value="SAUVIGNON_BLANC">Sauvignon Blanc</option>
              <option value="VERDELHO">Verdelho</option>
              <option value="CHARDONNAY">Chardonnay</option>
              <option value="DURIF">Durif</option>
            </select>
          </div>

          {/* Rating Field */}
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Rating (1-5)
            </label>
            <input
              id="rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value ? Number(e.target.value) : "")}
              min="1"
              max="5"
              step="0.1"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Consumed Field */}
          <div className="mb-4 flex items-center">
            <input
              id="consumed"
              type="checkbox"
              checked={consumed}
              onChange={(e) => setConsumed(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="consumed" className="ml-2 text-sm font-medium text-gray-700">
              Consumed
            </label>
          </div>

          {/* Date Consumed Field */}
          {consumed && (
            <div className="mb-4">
              <label htmlFor="dateConsumed" className="block text-sm font-medium text-gray-700">
                Date Consumed
              </label>
              <input
                id="dateConsumed"
                type="date"
                value={dateConsumed}
                onChange={(e) => setDateConsumed(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Wine
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWinePage;
