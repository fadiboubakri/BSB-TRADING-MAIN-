"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, User, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Logo } from "@/components/logo"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would validate and create the user account
      router.push("/user/dashboard")
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const passwordsMatch = formData.password === formData.confirmPassword || formData.confirmPassword === ""
  const passwordStrength = formData.password.length >= 8 ? "strong" : formData.password.length >= 4 ? "medium" : "weak"

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 text-center">
          <Logo className="mx-auto mb-2" />
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-muted-foreground mt-2">Join our trading platform and start automating your trades</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Enter your details to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="pl-10"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-10 w-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>

                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs">Password strength:</span>
                      <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            passwordStrength === "weak"
                              ? "w-1/3 bg-red-500"
                              : passwordStrength === "medium"
                                ? "w-2/3 bg-yellow-500"
                                : "w-full bg-green-500"
                          }`}
                        />
                      </div>
                      <span className="text-xs capitalize">{passwordStrength}</span>
                    </div>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-xs">
                        <CheckCircle2
                          className={`h-3 w-3 ${formData.password.length >= 8 ? "text-green-500" : "text-muted-foreground"}`}
                        />
                        <span>At least 8 characters</span>
                      </li>
                      <li className="flex items-center gap-1 text-xs">
                        <CheckCircle2
                          className={`h-3 w-3 ${/[A-Z]/.test(formData.password) ? "text-green-500" : "text-muted-foreground"}`}
                        />
                        <span>At least one uppercase letter</span>
                      </li>
                      <li className="flex items-center gap-1 text-xs">
                        <CheckCircle2
                          className={`h-3 w-3 ${/[0-9]/.test(formData.password) ? "text-green-500" : "text-muted-foreground"}`}
                        />
                        <span>At least one number</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`pl-10 ${!passwordsMatch && formData.confirmPassword ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {!passwordsMatch && formData.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading || !passwordsMatch || !agreeTerms}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
