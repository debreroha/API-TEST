import mongoose from "mongoose"

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title value'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description value'],
    },
    status:{
      type: Boolean,
      required: [true, 'Please add a status '],
      default: false,
    },
    dueDate: {
    type: Date,
    required: [true, 'Please add a due date'],
  },
  },
  {
    timestamps: true,
  }
)

const Goal = mongoose.model('Goal', goalSchema)

export default Goal
