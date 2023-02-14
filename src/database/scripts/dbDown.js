const { logger } = require('../../utils/logger');
const { dropDB: dropDBQuery } = require('../queries');

(() => {
    require('../../config/db.config.init').query(dropDBQuery, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('DB Destruida!');
        process.exit(0);
    });
})();