const express = require('express');
const product = require('./api/prodict');

const PORT = process.env.PORT || 3000;

const app = express();
app.use('/api/product', product);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
