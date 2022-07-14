const express = require("express");
const question = require("../models/question");
const router = express.Router();
router.get(
  //1. Get all the items
  "/get",
  async (req, res) => {
    try {
      const questions = await question.find(req.question);
      res.json(questions);
    } catch (error) {
      console.log(error);
    }
  }
);
//2.Add a newItem 
router.post(
  "/question",

  async (req, res) => {
    try {
      const questions = new question({
        question: req.body.question,
        count: 0
      });
      const savequestion = await questions.save();
      res.json(savequestion);
    } catch (error) {
      console.log(error);
      res.status(404).send("internal server error");
    }
  }
);
//router 3;
router.put('/:id', async (req, res) => {
  const user  = req.body;
  try {
    console.log(user)
    const newItem = {
      question: user.question,
      count: user.count+1
    };

    counter = await question.findByIdAndUpdate(req.params.id, { $set: newItem }, { new: true })
    res.json(counter);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router;
