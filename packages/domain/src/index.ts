export type SellerOnboardingState = "draft" | "submitted" | "under_review" | "needs_changes" | "approved" | "suspended" | "rejected";
export const canPublishProduct = (sellerStatus: SellerOnboardingState) => sellerStatus === "approved";
