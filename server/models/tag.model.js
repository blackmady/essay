const mongoose = require('mongoose')

const { Schema } = mongoose

const TagSchema = new Schema({
  title: {
    type: String,
    default: '',
  },
  sort: {
    type: Number,
    default: 0,
  },
  isShow: {
    type: Boolean,
    default: true,
  },
}, {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  })
mongoose.model('Tag', TagSchema)
