import Category from "../models/category";

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const { _page = 1, _limit = 10, _embed } = req.query;
    const options = {
      page: parseInt(_page, 10),
      limit: parseInt(_limit, 10),
    };

    let query = Category.find();

    if (_embed) {
      const embeds = _embed.split(",");
      embeds.forEach((embed) => {
        query = query.populate(embed);
      });
    }

    const result = await Product.paginate(query, options);
    const { docs, ...paginationData } = result; // Loại bỏ trường docs

    return res.status(200).json({
      categories: docs,
      ...paginationData,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
