import mongoose from "mongoose";
import express from "express";

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/Sample")
  .then(() => {
    console.log("connected to mongoDB successfully");
  })
  .catch((e) => {
    console.log(e.message);
  });

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

//create product
app.post("/api/v1/new-product", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//read product
app.get("/api/v1/products", async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

//update
app.put("/api/v1/product/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindModify: false,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

//delete product
app.delete("/api/v1/product/:id", async (req, res) => {
  // let product = await Product.findById(req.params.id);
  // if (!product) {
  //   return res.status(500).json({
  //     success: false,
  //     message: "product not found",
  //   });
  // }
  // await product.remove();
  await Product.findByIdAndRemove(req.params.id);
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

app.listen(PORT, () => {
  console.log("server started");
});
