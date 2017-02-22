/**
 * Created by cbrownroberts on 2/22/17.
 */
module.exports = {
    common: {
        storage: {
            host: 'localhost',
            database: 'server_dev',
            user: 'qirogami_user',
            password: 'password'
        }
    },

    // Rest of environments are deep merged over `common`.

    development: {},
    test: {
        storage: {
            database: 'server_test',
            password: 'foo'
        }
    },
    production:  {
        storage: {
            password: 'secret'
        }
    }
};