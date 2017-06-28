const express = require('express');

const router = express.Router();

router.get('*', function(req, res) {
  res.status(200).send({
    data: [{
      status_code: 200,
      status: 'ok'
    }]
  });
});

module.exports = router;