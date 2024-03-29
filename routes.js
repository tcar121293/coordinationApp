const express = require('express')
const router = express.Router()
const controller = require('./controller')
const passport = require('passport')
const auth = require('./auth/auth')


router.route('/auth/facebook')
    .get(passport.authenticate('facebook'))

router.route('/auth/facebook/callback')
    .get(passport.authenticate('facebook', {
            failureRedirect : '/'}),    
                    controller.login
            )
router.route('/bars')
    .post(controller.getBars)

router.route('/users')
    .get(controller.getUsers)



router.route('/going')
    .put(controller.isAuthenticated,controller.toggle_going)


router.route('/delete')
    .get(controller.deleteUsers)
router.route('/user')
    .get(controller.getUser)

    router.route('/logout')
    .get(controller.logout)


module.exports= router






