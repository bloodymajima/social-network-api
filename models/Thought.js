const { Schema, model } = require ('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        userName: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

const Thought = model("Thought", thoughtSchema);

module.exports = Thought