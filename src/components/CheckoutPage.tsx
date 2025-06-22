
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Smartphone, Wallet, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CheckoutPageProps {
  setCurrentPage: (page: "home" | "cart" | "checkout") => void;
}

export const CheckoutPage = ({ setCurrentPage }: CheckoutPageProps) => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<"card" | "upi" | "wallet">("card");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: "",
    city: "",
    pincode: "",
    landmark: ""
  });

  const totalAmount = getTotalPrice() + 49 + Math.round(getTotalPrice() * 0.18);

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
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-4">Your delicious food will be delivered in 30-45 minutes.</p>
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
        className="mb-6 hover:bg-orange-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Cart
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Delivery Address */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Delivery Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="street">Street Address</Label>
                <Input
                  id="street"
                  placeholder="Enter your street address"
                  value={deliveryAddress.street}
                  onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    value={deliveryAddress.city}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    placeholder="Pincode"
                    value={deliveryAddress.pincode}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, pincode: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="landmark">Landmark (Optional)</Label>
                <Input
                  id="landmark"
                  placeholder="Nearby landmark"
                  value={deliveryAddress.landmark}
                  onChange={(e) => setDeliveryAddress({...deliveryAddress, landmark: e.target.value})}
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
                  selectedPayment === "card" ? "border-orange-500 bg-orange-50" : "border-gray-200"
                }`}
                onClick={() => setSelectedPayment("card")}
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6 text-orange-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">Credit/Debit Card</h3>
                    <p className="text-sm text-gray-600">Pay securely with your card</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedPayment === "upi" ? "border-orange-500 bg-orange-50" : "border-gray-200"
                }`}
                onClick={() => setSelectedPayment("upi")}
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                  <div>
                    <h3 className="font-medium text-gray-800">UPI Payment</h3>
                    <p className="text-sm text-gray-600">Pay using UPI apps</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  selectedPayment === "wallet" ? "border-orange-500 bg-orange-50" : "border-gray-200"
                }`}
                onClick={() => setSelectedPayment("wallet")}
              >
                <div className="flex items-center space-x-3">
                  <Wallet className="h-6 w-6 text-orange-600" />
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
              <CardTitle className="text-xl text-gray-800">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2">
                  <div>
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.restaurantName} • Qty: {item.quantity}</p>
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
                  <span>Delivery Fee:</span>
                  <span>₹49</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxes (18%):</span>
                  <span>₹{Math.round(getTotalPrice() * 0.18)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-semibold pt-2 border-t">
                  <span>Total:</span>
                  <span className="text-orange-600">₹{totalAmount}</span>
                </div>
              </div>
              <Button
                onClick={handlePlaceOrder}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
              >
                Place Order - ₹{totalAmount}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
