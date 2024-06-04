import express from 'express'
import siswaRoute from '../route/siswa.route.js'
import authRoute from '../route/auth.route.js'
import { authenticateToken } from '../middleware/validate.middleware.js'
import passport from 'passport'
import "../middleware/passport.js"

const router = express()

// router.use(authenticateToken,siswaRoute)
// router.use(siswaRoute)
router.use(passport.authenticate('jwt', {session:false}),siswaRoute)
router.use(authRoute)


export default router
