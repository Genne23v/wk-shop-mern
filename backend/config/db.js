import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(
            `MongoDB connected: ${conn.connection.host}`.cyan.underline,
        );
    } catch (err) {
        console.error(`Error: ${err.message}`.red.underline.bold);
        process.exit(1);
    }
};

export default connectDB;
