const School = require('../models/School');

module.exports = (req, res) => {
    if (!req.query.name) return res.status(500), res.send({error: 'An error occurred. If unexpected, raise an issue at https://github.com/kajchang/StudentsReview/issues'});
    School.find({
        SCHNAM09: new RegExp(req.query.name.toUpperCase()
                                .split(' ')
                                .map(word => `(?=.*\\b${word}\\b)`)
                                .join('')
                                + '.*'
        )
    }).limit(10)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500);
            res.send({error: 'An error occurred. If unexpected, raise an issue at https://github.com/kajchang/StudentsReview/issues'});
        });
};
