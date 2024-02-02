//we will be handling the user registration process in here
"use Client";
import User from "@/models/User"

import connect from "@/utils/db";

import bcrypt from "bcryptjs";

import {NextResponse} from "next/server";



export const POST = async (request: any) => {
    const {email, password} = await request.json();

    await connect();

    const existingUser = await User.findOne({email});
//we are checking if email exists, if it does then we return an error message
    if (existingUser) {
        return new NextResponse("Email is already in use", {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        email,
        password: hashedPassword,
    })

    try{
        //we will be saving the user after validating
        await newUser.save();
        return new NextResponse("user is registered", {status: 200});
    }catch (err: any) {
        return new NextResponse(err, {
            status: 500,
        })
    }
}