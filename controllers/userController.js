const { User } = require('../models');

module.exports = {
    // Get all users
    async getUsers (req, res) {
        try {
            // Finds all users and populates thoughts
            const users = await User.find({})
            .populate();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get one user
    async getUser (req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId})
            .populate({
                path: "thoughts",
                select: "-__v"
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create user
    async createUser (req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }  
    },
    // Update user
    async updateUser (req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { new: true, runValidators: true }
            )
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }  
    },
    // Delete User
    async deleteUser (req, res) {
        try {
            const deletedUser = await User.findOneAndDelete(
                { _id: req.params.userId },
            )
            res.status(200).json(deletedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Add friend
    async addFriend (req, res) { 
        try {
            const user = await User.findOne(
                { _id: req.params.userId }
            );

            const friend = await User.findOne(
                { _id: req.params.friendId}
            )

            if (user.friends.includes(friend._id)) {
                res.status(404).json({ message: 'You are already friends!'})
            } else {
                const newFriend = await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $push: {friends: req.params.friendId} },
                    { new: true }
                )
                res.status(200).json(newFriend);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete friend
    async deleteFriend(req, res) {
        try {
            const deletedFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: {friends: req.params.friendId} },
                { new: true }
            )
            res.status(200).json(deletedFriend);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}