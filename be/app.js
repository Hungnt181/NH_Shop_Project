import express from "express";
import cors from "cors";
import productRouter from "./routers/product";

const app = express();

app.use(cors());

app.use("/api", productRouter);

export const viteNodeApp = app;

/**
 * B1: npm init -y
 * B2: npm i vite vite-plugin-node -D
 * B3: npm i express
 * B4: Tạo và truy cập file vite.config.js, chỉnh sửa appPath: "./app.js",
 * B5: Tạo file app.js, thêm code trên
 * B6: Truy cập package.json, thêm script "dev": "vite"
 * B7: Chạy npm run dev
 */

/**
 * B1: Tạo danh sách sản phẩm
 * B2: Trả về danh sách sản phẩm khi truy cập /api/products
 * B3: cài đặt middleware cors: npm i cors
 * B4: Thêm middleware cors vào app: app.use(cors())
 * B5: Truy cập file danh sách sản phẩm ở front end, chỉnh sửa lại đường dẫn API
 */
