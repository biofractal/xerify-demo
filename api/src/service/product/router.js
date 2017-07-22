import express from 'express'

const router = express.Router({mergeParams: true})

router.get('/product/ping', (req, res) => {
  res.send(`The 'product' service endpoints have been succesfully mounted : ${new Date().toLocaleString('en-GB')}`)
})

export default router
