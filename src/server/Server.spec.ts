import * as supertest from 'supertest'
import server from './Server'

describe('App class', () => {
    it('should serve index file', (done) => {
        supertest(server)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200, done)
    });
})