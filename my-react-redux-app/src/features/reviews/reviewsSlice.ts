import { createSlice } from '@reduxjs/toolkit';


// Defines the shape of a Review object in the state
export interface Review {
  id: number;
  image: string;
  text: string;
  author: string;
}

// The initial state for the reviews slice containing a list of review objects
const initialState: Review[] = [
  { id: 1, image: '/images/image1.png', text: 'Amazing product! Highly recommended for anyone looking for quality.', author: 'John Doe' },
  { id: 2, image: '/images/image2.png', text: 'Exceptional service and fantastic quality. Will definitely buy again!', author: 'Jane Smith' },
  { id: 3, image: '/images/image3.png', text: 'I am thoroughly impressed with the customer support. Highly satisfied!', author: 'Alice Johnson' },
  { id: 4, image: '/images/image4.png', text: 'The product exceeded my expectations in every way. Great value for money!', author: 'Bob Brown' }
];

// Creates a slice for reviews with the initial state and reducers
const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
  },
});

// Selector function to get all reviews from the state
export const selectAllReviews = (state: any) => state.reviews;

// The reducer for the reviews slice which will be used in the store
export default reviewsSlice.reducer;
