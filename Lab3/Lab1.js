/**
 * Created by Hatake on 6/28/2017.
 */
const dns = require('dns');

dns.resolve4('archive.org', (err, address) => {
    if (err) throw err;

    console.log(`address: ${address}`);
});
