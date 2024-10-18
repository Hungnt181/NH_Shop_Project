import Product from "../models/product";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { _embed } = req.query;
    let query = Product.findById(id).populate(_embed, "category");

    if (_embed) {
      const embeds = _embed.split(",");
      embeds.forEach((embed) => {
        query = query.populate(embed);
      });
    }

    const product = await query.exec();
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { _page = 1, _limit = 10, _embed } = req.query;
    const options = {
      page: parseInt(_page, 10),
      limit: parseInt(_limit, 10),
    };

    let query = Product.find();

    if (_embed) {
      const embeds = _embed.split(",");
      embeds.forEach((embed) => {
        query = query.populate(embed);
      });
    }

    const result = await Product.paginate(query, options);
    const { docs, ...paginationData } = result; // Loại bỏ trường docs

    return res.status(200).json({
      products: docs,
      ...paginationData,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Cập nhật một sản phẩm theo ID
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm nào" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa một sản phẩm theo ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm nào" });
    }
    res.status(200).json({ message: "Xóa sản phẩm thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
