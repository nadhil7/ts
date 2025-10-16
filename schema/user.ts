import mongoose from 'mongoose';

const userschema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        age: { type: Number, required: true },
    }
    //   ,
    //   {
    //     methods: {
    //       getName() {
    //         console.log(`${this.name}!`);
    //       },
    //     },
    //   }
);

export type User = mongoose.InferSchemaType<typeof userschema>;
export const User = mongoose.model('User', userschema);
