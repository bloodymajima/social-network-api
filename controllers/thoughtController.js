const { Thought } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts (req, res) {
        try{
            const thoughts = await Thought.find()
            res.status(200).json(thoughts)
        } catch (err) {
            console.log('Error: ', err)
            res.status(500).json(err)
        }
    },
    // Get one thought
    async getThought (req, res) {
        try{
            const thought = await Thought.find({_id: req.params.id})
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Create one thought
    async createThought (req, res) {
        try{
            const thought = await Thought.create(req.body)
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Update one thought
    async updateThought (req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {new: true, runValidators: true}
            )
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Delete one thought
    async deleteThought (req, res) {
        try{
            const thought = await Thought.findOneAndDelete({_id: req.params.id})
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },

};