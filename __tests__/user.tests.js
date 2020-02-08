import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../src/server';

describe('Create user', () => {
  beforeAll(async () => {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
  });

  it('Should create new user', async (done) => {
    const res = await supertest(app)
      .post('/users')
      .send({
        name: 'test 1',
        email: 'email test 1',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual('Usuario creado exitosamente');
    done();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
