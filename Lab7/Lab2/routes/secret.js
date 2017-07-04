/**
 * Created by Hatake on 7/3/2017.
 */

var express = require('express');
var router = express.Router();
var crypto = require('crypto');
router.get('/', function (req, res, next) {
    const db = req.db;

    db.homework7.findOne({}, (function (err, item) {
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');

        let decrypted = '';
        decipher.on('readable', () => {
            const data = decipher.read();
            if (data)
                decrypted += data.toString('utf8');
        });
        decipher.on('end', () => {
            res.send(decrypted);
            // Prints: some clear text data
        });

        const encrypted = item.message;
        decipher.write(encrypted, 'hex');
        decipher.end();

    }));
});


module.exports = router;