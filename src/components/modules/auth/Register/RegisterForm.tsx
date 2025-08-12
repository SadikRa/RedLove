/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { registerUser } from "@/services/AuthService";
import { toast } from "sonner";

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await registerUser(data);
      if (res?.success) {
        toast.success(`${res?.message} please login`);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="grid md:grid-cols-2 w-full max-w-4xl shadow-lg bg-card border border-border rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block w-full px-8 py-18">
          <Image
            src="https://res.cloudinary.com/dazrkjcqb/image/upload/v1754922013/nleiyjl7rgykrwygvfmz.png"
            alt="Register Illustration"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <Card className="w-full rounded-bl-none rounded-tl-none p-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold text-primary">
                Create an Account🩸
              </CardTitle>
              <ModeToggle />
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-primary"
                >
                  Name
                </Label>
                <Input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-primary"
                >
                  Email
                </Label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-primary"
                >
                  Phone
                </Label>
                <Input
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9+\-()\s]+$/,
                      message: "Invalid phone format",
                    },
                  })}
                  type="text"
                  id="phone"
                  placeholder="Enter your phone"
                  className="mt-1"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-primary"
                >
                  Password
                </Label>
                <Input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="mt-1"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Sign Up
              </Button>

              {/* Login Link */}
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
