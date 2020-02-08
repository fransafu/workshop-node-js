import app from './server';

// Lister server on PORT and connect database
app.listen(8080, (err) => {
  if (err) throw err;

  console.log('Server listening on port 8080');
});
