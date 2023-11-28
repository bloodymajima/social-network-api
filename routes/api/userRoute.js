const router = require('express').Router();
const { 
    getUsers, 
    createUser, 
    getUser, 
    updateUser, 
    deleteUser, 
    addFriend, 
    deleteFriend } = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

router.route('/:id/:friendId').put(addFriend).delete(deleteFriend)

module.exports = router;