import { Router } from "express";
import { LikeService } from "../services/LikeService";
import { verifyToken } from "../middlewares/verifyToken";
const LikeRouter = Router();

LikeRouter.post("/addLike", verifyToken, async (req, res, next) => {
  try {
    const giveUserId = req.user;
    const { getCocktailId } = req.body;
    const newLike = await LikeService.addLike({ giveUserId, getCocktailId });
    res.status(200).json(newLike);
  } catch (error) {
    next(error);
  }
});

LikeRouter.get("/likeList", verifyToken, async (req, res, next) => {
  try {
    const likeList = await LikeService.getLikeList();
    res.status(200).json(likeList);
  } catch (error) {
    next(error);
  }
});

export { LikeRouter };