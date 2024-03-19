const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "citizen",
  api_key: "373369271762559",
  api_secret: "xe1Y1WOi7P7bUFPH3riVzl0HGGU",
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Generate public_id based on some unique identifier
    const public_id = req.params.internId; // Example: You can use customerId as public_id
    const existingImage = await cloudinary.search
      .expression(`public_id:${public_id}`)
      .execute();

    // Check if image with public_id already exists
    if (existingImage.total_count > 0) {
      // Image with public_id already exists, update it
      return { public_id: public_id };
    } else {
      // Image with public_id does not exist, upload new image
      return { folder: "Interns-Portal-Images", public_id: public_id };
    }
  },
});

module.exports = storage;
