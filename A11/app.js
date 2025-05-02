require('dotenv').config();

console.log(process.env.MONGO_URL);

const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', async () => {

    console.log('Connected to MongoDB');

    // 2. Define a Schema
    const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    enrolled: Boolean,
    favoriteLanguages: [String]
    });

    // 3. Create a Model
    const Student = mongoose.model('Student', studentSchema);

    // 4. Insert a Document
    await Student.create({
        name: 'Alex',
        age: 22,
        enrolled: true,
        favoriteLanguages: ['JavaScript', 'Python']
    });
    console.log('Inserted one student record.');

    // 5. Query and Display Results
    const students = await Student.find({ enrolled: true });
    console.log('Enrolled Students:', students);

    // 6. Close the connection
    mongoose.connection.close();

});