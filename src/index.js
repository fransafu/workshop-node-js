import mongoose from 'mongoose';
import app from './server';

// Lister server on PORT and connect database
app.listen(process.env.PORT, (err) => {
  if (err) throw err;

  return mongoose
    .connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Server listening on port 8080');
    })
    .catch((errDB) => {
      throw errDB;
    });
});
