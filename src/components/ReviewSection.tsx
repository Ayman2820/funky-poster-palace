
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";

interface ReviewSectionProps {
  note: any;
}

export const ReviewSection = ({ note }: ReviewSectionProps) => {
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-300"
        } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
        onClick={() => interactive && onStarClick && onStarClick(i + 1)}
      />
    ));
  };

  const handleSubmitReview = () => {
    // In a real app, this would submit to backend
    console.log("Submitting review:", newReview);
    setShowReviewForm(false);
    setNewReview({ rating: 5, comment: "" });
  };

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">{note.rating}</div>
            <div className="flex items-center justify-center space-x-1 mb-1">
              {renderStars(note.rating)}
            </div>
            <div className="text-sm text-gray-600">{note.totalReviews} reviews</div>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = note.reviews.filter((r: any) => Math.floor(r.rating) === stars).length;
              const percentage = note.totalReviews > 0 ? (count / note.totalReviews) * 100 : 0;
              return (
                <div key={stars} className="flex items-center space-x-2 mb-1">
                  <span className="text-sm w-8">{stars}</span>
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <Button
          onClick={() => setShowReviewForm(!showReviewForm)}
          variant="outline"
          className="w-full"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Write a Review
        </Button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h4 className="font-semibold text-gray-800 mb-4">Write Your Review</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Rating
                </label>
                <div className="flex items-center space-x-1">
                  {renderStars(newReview.rating, true, (rating) => 
                    setNewReview({ ...newReview, rating })
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Share your experience with these notes..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows={4}
                />
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={handleSubmitReview}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Submit Review
                </Button>
                <Button
                  onClick={() => setShowReviewForm(false)}
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800">Student Reviews</h4>
        {note.reviews.length > 0 ? (
          note.reviews.map((review: any) => (
            <Card key={review.id} className="bg-white">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-medium text-sm">
                        {review.userName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-gray-800">{review.userName}</span>
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
                        <ThumbsUp className="h-4 w-4" />
                        <span>Helpful</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};
