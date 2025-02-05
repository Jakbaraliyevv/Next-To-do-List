"use client";

import { UserType } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function FormData() {
  const loginData: UserType[] = JSON.parse(
    localStorage.getItem("register") || "[]"
  );

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register state
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getLoginValue = () => {
    if (loginEmail && loginPassword) {
      const findUser = loginData.find((item) => item.email === loginEmail);

      if (findUser && findUser.password === loginPassword) {
        const logindata = {
          email: loginEmail,
          password: loginPassword,
        };
        localStorage.setItem("login", JSON.stringify(logindata));
        setLoginEmail("");
        setLoginPassword("");
        console.log("Login tori");
      } else {
        console.log("User not found or incorrect password");
      }
    } else {
      console.log("Please enter email and password");
    }
  };

  const getregisterValue = () => {
    if (name && lastName && email && password) {
      const registerData = {
        name,
        surname: lastName,
        email,
        password,
      };

      // Register data saqlash
      const existingData = JSON.parse(localStorage.getItem("register") || "[]");
      existingData.push(registerData);
      localStorage.setItem("register", JSON.stringify(existingData));

      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } else {
      console.log("Please fill all fields");
    }
  };

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Welcome back! Please log in to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                type="email"
                id="name"
                placeholder="Enter your email!"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                id="username"
                placeholder="Enter your password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={getLoginValue}>Login</Button>
          </CardFooter>
        </Card>

        {/* Register */}
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Create a new account to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="current"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Surname</Label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="current"
                type="text"
                placeholder="Enter your surname"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="name"
                placeholder="Enter your email!"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="new"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={getregisterValue}>Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
