
import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true, //no two users can have the same email
            required: true,
        },
        password: {
            type: String,
            required: false, //we are making the password required to be false to account for people whoo will be using github to login
        }
    },
    {
        timestamps: true
    }
)

const User = models.User || mongoose.model("User", userSchema);
export default User;
//checks whether the model exists or not, if it exists we return the existing model, else we create another model.