
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Smartphone, Wallet, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CheckoutPageProps {
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
}

export const CheckoutPage = ({ setCurrentPage }: CheckoutPageProps) => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<"card" | "upi" | "wallet">("card");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    organization: ""
  });

  const totalAmount = getTotalPrice() + 99 + Math.round(getTotalPrice() * 0.18);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setCurrentPage("home");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center py-16">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">✓</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Enrollment Successful!</h2>
          <p className="text-gray-600 mb-4">Welcome to your learning journey! You can now access your courses.</p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => setCurrentPage("cart")}
        className="mb-6 hover:bg-indigo-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Cart
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Student Information */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Student Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={studentInfo.name}
                  onChange={(e) => setStudentInfo({...studentInfo, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={studentInfo.email}
                    onChange={(e) => setStudentInfo({...studentInfo, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    value={studentInfo.phone}
                    onChange={(e) => setStudentInfo({...studentInfo, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="organization">School/Organization (Optional)</Label>
                <Input
                  id="organization"
                  placeholder="Your school or organization"
                  value={studentInfo.organization}
                  onChange={(e) => setStudentInfo({...studentInfo, organization: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedPayment === "card" ? "border-indigo-500 bg-indigo-50" : "border-gray-200"
                }`}
                onClick={() => setSelectedPayment("card")}
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">Credit/Debit Card</h3>
                    <p className="text-sm text-gray-600">Pay securely with your card</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedPayment === "upi" ? "border-indigo-500 bg-indigo-50" : "border-gray-200"
                }`}
                onClick={() => setSelectedPayment("upi")}
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">UPI Payment</h3>
                    <p className="text-sm text-gray-600">Pay using UPI apps</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedPayment === "wallet" ? "border-indigo-500 bg-indigo-50" : "border-gray-200"
                }`}
                onClick={() => setSelectedPayment("wallet")}
              >
                <div className="flex items-center space-x-3">
                  <Wallet className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">Digital Wallet</h3>
                    <p className="text-sm text-gray-600">Paytm, PhonePe, etc.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Enrollment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">by {item.instructor} • Qty: {item.quantity}</p>
                  </div>
                  <span className="font-medium text-gray-800">₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Platform Fee:</span>
                  <span>₹99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxes (18%):</span>
                  <span>₹{Math.round(getTotalPrice() * 0.18)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-semibold pt-2 border-t">
                  <span>Total:</span>
                  <span className="text-indigo-600">₹{totalAmount}</span>
                </div>
              </div>
              <Button
                onClick={handlePlaceOrder}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg"
              >
                Complete Enrollment - ₹{totalAmount}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
