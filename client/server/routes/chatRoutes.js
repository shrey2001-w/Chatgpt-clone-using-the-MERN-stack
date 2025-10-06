import express from "express"
import { createChat, deleteChats, getChat } from "../controllers/chatController.js";
import { protect } from "../middlewares/auth.js";


const chatRouter = express.Router();

chatRouter.get('/create', protect, createChat)
chatRouter.get('/get', protect, getChat)
chatRouter.get('/delete', protect, deleteChats)


export default chatRouter