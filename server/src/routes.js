module.exports = (app) => {
  app.post('/register', (req, res) => {
    console.log(req);
    res.send({
      message: `Welcome ${req.body.email}!`
    })
  })
}
