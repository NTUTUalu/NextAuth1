// we will be handling the user registration process in here
"use client";
import User from "@/models/User";

import connect from "@/utils/db";

import bcrypt from "bcryptjs";

import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });
  //we are checking if email exists, if it does then we return an error message
  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  console.log(hashedPassword); //the 5 states the complexity
  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    // we will be saving the user after validating
    console.log("trying to create user");
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    console.log("failed to create new user")
    return new NextResponse(err, { status: 500 });
  }
};
