const { Schema, model } = require ('mongoose');
const reactionSchema = require('./reactions')

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
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought