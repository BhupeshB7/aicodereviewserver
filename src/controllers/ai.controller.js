import generateContent from "../ai.service.js";

const aiCodeReview = async (req, res) => {
//   console.log("aiCodeReview", req.body);

  const code = req.body.code;
  if (!code) {
    res.status(400).json({ message: "Code is required" });
    return;
  }
  const result = await generateContent(code);
  res
    .status(200)
    .json({ message: "Code review generated successfully", result });
};

export default aiCodeReview;
