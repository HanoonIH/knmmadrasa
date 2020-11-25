var express = require('express');
var router = express.Router();

/* GET home page. */
const classData = [
  {
    class: '01',
    subjects: [ 
      { name: 'Islamika Balapadavali'},
      { name: 'Arabic'}
    ],
    subjectsCount: 5
  },
  {
    class: '02',
    subjects: [ 
      { name: 'Islamika Balapadavali'},
      { name: 'Arabic'},
      { name: 'Thilavathul Quran'},
      { name: 'Tharjumathul Quran'}
    ],
    subjectsCount: 3
  },
  {
    class: '03',
    subjects: [],
    subjectsCount: 4
  },
  {
    class: '04',
    subjects: [],
    subjectsCount: 5
  },
  {
    class: '05',
    subjects: [],
    subjectsCount: 3
  },
  {
    class: 'TQ',
    subjects: [],
    subjectsCount: 4
  },
  {
    class: '06',
    subjects: [],
    subjectsCount: 4
  },
  {
    class: '07',
    subjects: [],
    subjectsCount: 5
  },
  {
    class: '08',
    subjects: [],
    subjectsCount: 3
  },
  {
    class: '09',
    subjects: [],
    subjectsCount: 4
  },
  {
    class: '10',
    subjects: [],
    subjectsCount: 4
  },
];

router.get('/', function(req, res, next) {
  res.render('index', { classData });
});

router.get('/class/:class', (req, res) => {
  let classSubjects = classData.filter((item) => {
    return item.class == req.params.class
  });
  // console.log(classSubjects[0].subjects);
  res.render(`class${req.params.class}`, { classSubs: classSubjects[0].subjects });
})

module.exports = router;
