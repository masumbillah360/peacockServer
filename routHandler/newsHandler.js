const express = require("express");
const { ObjectId } = require("mongodb");
const { newsCollection } = require("./newsCollection");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const result = await newsCollection.find({}).toArray();
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = {
      _id: ObjectId(id),
    };
    const result = await newsCollection.findOne(query);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await newsCollection.insertOne(data);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    console.log(body, id);
    const filter = {
      _id: ObjectId(id),
    };
    const updatedDoc = {
      $set: body,
    };
    const result = await newsCollection.updateOne(filter, updatedDoc);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = {
      _id: ObjectId(id),
    };
    const result = await newsCollection.deleteOne(filter);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

module.exports = router;
