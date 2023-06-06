const express = require('express')
const { check } = require('express-validator')
const router = express.Router()

const { getSongs, getSong, postSong, putSong, deleteSong } = require('../controllers/songs');
const { existsTitle, existNotSong } = require('../helpers/db-validator');
const { validateFields } = require('../helpers/validate-fields');

router.get('/', getSongs);
router.get('/:id',[
    check('id').isMongoId(),
    validateFields
], getSong);
router.post('/',[
    check('title').custom(existsTitle),
    validateFields
], postSong);
router.put('/:id',[
    check('id').isMongoId(),
    check('title').custom(existsTitle),
    validateFields
], putSong);
router.delete('/:id',[
    check('id').isMongoId(),
    check('id').custom(existNotSong),
    validateFields
], deleteSong);

module.exports = router