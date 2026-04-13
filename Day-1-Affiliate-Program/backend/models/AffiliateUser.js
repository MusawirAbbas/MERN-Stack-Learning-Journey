import mongoose from "mongoose";

const affiliateUserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    website: {
      type: String,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const AffiliateUser = mongoose.model("AffiliateUser", affiliateUserSchema);

export default AffiliateUser;
