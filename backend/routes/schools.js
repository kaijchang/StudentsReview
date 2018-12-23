const School = require('../models/School');

module.exports = (req, res) => {
    const query = req.query;

    if (isNaN(parseInt(query.limit))) {
        query.limit = 1;
    }

    if (typeof (query.fuzzy === 'true' || (query.fuzzy  === 'false' ? false : query.fuzzy)) !== 'boolean') {
        query.fuzzy = false;
    }

    const limit = parseInt(query.limit) > 10 ? 10 : parseInt(query.limit);
    const fuzzy = query.fuzzy;

    delete query.limit;
    delete query.fuzzy;

    if (!Object.keys(query).every(param => typeof query[param] === 'string')) {
        res.status(400);
        res.send({error: 'All parameters must be strings. If unexpected, raise an issue at https://github.com/kajchang/StudentsReview/issues'});
    }

    if (fuzzy) {
        Object.keys(query).map(param => {
            query[param] = new RegExp(query[param].toUpperCase()
                    .split(' ')
                    .map(word => `(?=.*\\b${word}\\b)`)
                    .join('')
                + '.*'
            )
        });
    }

    School
        .find(query)
        .limit(limit)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500);
            res.send({error: 'An error occurred. If unexpected, raise an issue at https://github.com/kajchang/StudentsReview/issues'});
        });
};
