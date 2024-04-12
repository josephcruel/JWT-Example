const qs = require('querystring')
const fs = require('fs')
const path = require('path')

const level = require('level')
const db = level(__dirname + '/db')

const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || "change_this_to_something_random"

function loadView(view) {
    let filepath = path.resolve(__dirname, '../views', view + '.html')
    return fs.readFileSync(filepath).toString()
}

//Content pages
const index = loadView('index') 
const restricted = loadView('restricted')
const notFound = loadView('notFound')

//Show Not Found Page
function authFail(res, callback) {
    res.writeHead(401, {'content-type': 'text/html'})
    return res.end(notFound)
}

//Create a JWT
function generateToken(req) {
    //By default it will expire the token afte 7 days
    //The value of expire(exp) needs to be in seconds
    
}