const {Schema ,model} = require('mongoose')

const ConversationSchema = new Schema(
    {
      id: {
        type: String,
        required: true,
        unique: true,
      },
      sellerId: {
        type: String,
        required: true,
      },
      buyerId: {
        type: String,
        required: true,
      },
      readBySeller: {
        type: Boolean,
        required: true,
      },
      readByBuyer: {
        type: Boolean,
        required: true,
      },
      lastMessage: {
        type: String,
        required: false,
      },
    },
    {
      timestamps: true,
    }
);
  
module.exports = model("Conversation", ConversationSchema);