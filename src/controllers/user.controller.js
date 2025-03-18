import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async (request, res) => {
  res.status(200).json({
    message: "OK",
  });
});
export { registerUser };
