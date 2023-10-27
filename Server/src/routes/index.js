const {Router} = require('express')
const {getCharById} = require('../controllers/getCharById');
const {postFav,deleteFav} = require('../controllers/handleFavorites');
const {logins} = require('../controllers/login');

const router = Router();

router.get("/character/:id",getCharById);

router.get("/login",logins)

router.post("/fav",postFav)

router.delete("/fav/:id",deleteFav)

module.exports = router