import mongoose from 'mongoose';

export default {
    mongoose,
    connect: () => {
        mongoose.Promise = Promise;
        const url = `mongodb://127.0.0.1/test`
        mongoose.connect(url, {useNewUrlParser: true, });
    },
    disconnect: (done) => {
        mongoose.disconnect(done);
    },
};