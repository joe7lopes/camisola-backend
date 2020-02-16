import mongoose from 'mongoose';

export default {
    mongoose,
    connect: () => {
        mongoose.Promise = Promise;
        const url = `mongodb://127.0.0.1/test`
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    },
    disconnect: async (done) => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.disconnect();
        done()
    },

    dropCollections: (done) => {

        for (const collection in mongoose.connection.collections) {
            mongoose.connection.collections[collection].deleteMany({});
        }
        done();
    }
};