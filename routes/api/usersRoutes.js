const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addNewFriend,
  deleteFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser)
router
  .route('/:userId')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser)

router.route('/:userId/friends/:friendId')
  .post(addNewFriend)
  .delete(deleteFriend)

module.exports = router;

