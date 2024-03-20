const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
// const { merge } = require("./listing.js");
const {validateReview, isLoggedIn , isReviewAuthor} = require("../Middleware.js");

const reviewController = require("../controllers/reviews.js");

// Reviews Route

router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete reviews

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview)
);

module.exports = router;