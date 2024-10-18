import { Router } from "express";
import { createCategory, getCategories } from "../controllers/category";

const router = Router();

// Route lấy danh sách danh mục
router.get("/categories", getCategories);
// Route để thêm một sản phẩm mới
router.post("/category", createCategory);

export default router;
