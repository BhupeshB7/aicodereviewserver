import express from "express"; 
import aiCodeReview from "../controllers/ai.controller.js";

const aiRouter = express.Router();

aiRouter.post("/generate", aiCodeReview);

export default aiRouter;
