const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addNewReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/')
  .get(getThoughts)
  .post(createThought)

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought)

router.route('/:thoughtId/reactions')
  .post(addNewReaction)
  
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction)

module.exports = router;