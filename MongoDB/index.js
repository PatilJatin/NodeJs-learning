import mongoose from "mongoose";
mongoose
  .connect("mongodb://127.0.0.1:27017/Sample")
  .then(() => {
    console.log("connected to mongoDB successfully");
  })
  .catch((e) => {
    console.log(e.message);
  });

const student = new mongoose.Schema({
  name: String,
  password: String,
  number: Number,
});

const Student = mongoose.model("Student", student);

const adder = async () => {
  //   const newStudent = new Student({
  //     name: "jatin",
  //     password: "123",
  //     number: "78567856756",
  //   });

  //   await newStudent.save();

  const newStudent = await Student.create({
    name: "Akash",
    password: "123",
    number: "2112341234",
  });
  console.log(newStudent);

  //   const newStudent = await Student.find();
  //   console.log(newStudent);
  const check = await Student.find({ number: { $eq: 2112341234 } });
  console.log(check);
};

adder();
