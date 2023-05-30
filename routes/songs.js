const express = require('express')
const { check } = require('express-validator')
const router = express.Router()

const { getSongs, getSong, postSong, putSong, deleteSong } = require('../controllers/songs');
const { existsTitle } = require('../helpers/db-validator');
const { validateFields } = require('../helpers/validate-fields');

router.get('/', getSongs);
router.get('/:id',[
    check('id').isMongoId()
], getSong);
router.post('/add',[
    check('title').custom(existsTitle),
    validateFields
], postSong); //mirar titulo repetido
router.put('/:id',[
    check('id').isMongoId()
], putSong); //controlar edit de title a uno ya existente
router.delete('/:id',[
    check('id').isMongoId()
], deleteSong); //json de error

module.exports = router