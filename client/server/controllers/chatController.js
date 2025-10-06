// API CONTROLLER FOR CREATING A NEW CHAT

import Chat from "../models/Chat.js"

export const createChat = async (req , res) => {
    try{
        const userId = req.user._id

        const chatData = {
            userId,
            messages: [],
            name: "new chat",
            userName: req.user.name

        }

        await Chat.create(chatData)
        res.json({success: true, message: "chat created"})


    }catch(error){
        res.json({ success: false , message: error.message});


    }
}

//API CONTROLLER FOR GETTING ALL CHATS


export const deleteChats = async (req , res) => {
    try{
        const userId = req.user._id

        const {chatId} = req.body

        await Chat.deleteOne({_id: chatId, userId})

        res.json({success: true, message: "chat deleted succesfully"})


    }catch(error){
        res.json({ success: false , message: error.message});


    }
}

//API CONTROLLER FOR DELETING THE CHATS

export const getChat = async (req , res) => {
    try{
        const userId = req.user._id

        const Chats = await Chat.find({userId}).sort({ updatedAt: -1})

        res.json({success: true, Chats})


    }catch(error){
        res.json({ success: false , message: error.message});


    }
}


