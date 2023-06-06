const express = require('express')
const router = express.Router()
const {getUsers, addUser, updateUser, deleteUser} = require('../controllers/users')
const { check } = require('express-validator')
const { validateFields } = require('../helpers/validate-fields')
const { validateJWT } = require('../middlewares/validate-jwt')
const {isAdminRol, hasRol} = require('../middlewares/validate-rol')

router.get('/', getUsers)

router.post('/',[
    check('email', 'Email invalid').isEmail(),
    validateFields
], addUser)

router.put('/:id',[
    check('id').isMongoId(),
    validateFields
], updateUser)

router.delete('/:id',[
    //validateJWT,
    // hasRol("ADMIN"),
    check('id').isMongoId(),
    validateFields
], deleteUser)

module.exports = router;