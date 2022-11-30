// const { defineConfig } = require('cypress')

const {defineConfig} = require('cypress')
module.exports = defineConfig({
    e2e: {
        baseUrl : 'https://petstore.swagger.io/v2',
        specPattern : "cypress/support/e2e",
        supportFile : false,
    },
    env:{
        username : "my-skill-12345",
        password : "12345"
    }
})