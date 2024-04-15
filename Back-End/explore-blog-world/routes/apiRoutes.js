import { Router } from "express";
import * as controller from "../controllers/controller.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/create", requireAuth, controller.create_get);
router.post("/create", controller.create_post);
router.get("/blogs", requireAuth, controller.blog_index);
router.get("/blogs/details/:id", requireAuth, controller.blog_details);
router.put("/blogs/details/:id", requireAuth, controller.blog_put);
router.delete("/blogs/details/:id", requireAuth, controller.blog_delete);

export default router;
