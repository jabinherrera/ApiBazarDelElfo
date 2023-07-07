import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            requiered: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            required: true,
        },
        stock: {
            type: Number,
            requiered: true,
        }
    }
);

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;