var express = require('express');
var router = express.Router();

/* GET home page. */
const classData = [
  {
    class: '01',
    subjectsCount: 5
  },
  {
    class: '02',
    subjectsCount: 3
  },
  {
    class: '03',
    subjectsCount: 4
  },
  {
    class: '04',
    subjectsCount: 5
  },
  {
    class: '05',
    subjectsCount: 3
  },
  {
    class: 'TQ',
    subjectsCount: 4
  },
  {
    class: '06',
    subjectsCount: 4
  },
  {
    class: '07',
    subjectsCount: 5
  },
  {
    class: '08',
    subjectsCount: 3
  },
  {
    class: '09',
    subjectsCount: 4
  },
  {
    class: '10',
    subjectsCount: 4
  },
];

router.get('/', function(req, res, next) {
  res.render('index', { classData });
});

router.get('/class/:class', (req, res) => {
  res.render('class');
})

module.exports = router;
