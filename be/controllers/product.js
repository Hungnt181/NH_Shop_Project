import Product from "../models/products";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// add metold
/**
 * Lấy gtri form
 *
 * axios.post(:"API/products/", formData)
 *
 * // req.body : formDât
 * req.param
 * req.query
 */
