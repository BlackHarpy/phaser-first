import * as supertest from 'supertest'
import app from './App'

describe('App class', () => {
    it('should serve index file', (done) => {
        supertest(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200, done)
    });
})