import mongoose from 'mongoose';
import environments from './enviroments.js';

function connect() {
  return mongoose.connect(environments.DATABASE);
}

export default connect;