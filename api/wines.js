const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

// Create a new wine entry
router.post("/add", async (req, res) => {
  const { name, year, type, varietal, rating, consumed, dateConsumed } = req.body;

  try {
    const wine = await prisma.wine.create({
      data: {
        name,
        year,
        type,
        varietal,
        rating: rating ? parseFloat(rating) : null,
        consumed,
        dateConsumed: consumed ? new Date(dateConsumed) : null,
      },
    });
    res.status(201).json(wine);
  } catch (error) {
    res.status(500).json({ error: "Failed to add wine", details: error.message });
  }
});

// Get the list of wines
router.get("/", async (req, res) => {
  try {
    const wines = await prisma.wine.findMany({ take: 20 });
    res.status(200).json(wines);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch wines", details: error.message });
  }
});

// Update an existing wine
router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { name, year, type, varietal, rating, consumed, dateConsumed } = req.body;

  try {
    const wine = await prisma.wine.update({
      where: { id: parseInt(id) },
      data: {
        name,
        year,
        type,
        varietal,
        rating: rating ? parseFloat(rating) : null,
        consumed,
        dateConsumed: consumed ? new Date(dateConsumed) : null,
      },
    });
    res.status(200).json(wine);
  } catch (error) {
    res.status(500).json({ error: "Failed to update wine", details: error.message });
  }
});

// Delete a wine entry
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.wine.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete wine", details: error.message });
  }
});

module.exports = router;
