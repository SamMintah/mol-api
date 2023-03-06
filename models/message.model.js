const {Schema,model} = require('mongoose')

const MessageSchema = new Schema({
    conversationId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },{
    timestamps:true
});
  
module.exports = model("Message", MessageSchema);