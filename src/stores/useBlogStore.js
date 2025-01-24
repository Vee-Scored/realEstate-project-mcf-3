import { create } from "zustand";

import {
  blogCardImg1,
  blogCardImg2,
  blogCardImg3,
} from "../assets/blogAssets/index";
import { aeroPlane, corridor, family } from "../assets/HomeAssets/index";
const blogs = [
  {
    id: 1,
    title: "5 Essential Tips for First-Time Home Buyers",
    slug: "5-essential-tips-for-first-time-home-buyers",
    content:
      "Buying your first home can be exciting yet challenging. In this guide, we break down five crucial tips that will help you navigate the market, secure the best deals, and avoid common pitfalls. From budgeting to understanding mortgages, we’ve got you covered.",
    description:
      "Learn how to budget, assess mortgage options, and choose the right neighborhood for your first home. Gain insights on handling legal documentation and avoiding common mistakes that could cost you later. Start your home-buying journey confidently!",
    blog_image: corridor,
    date: "25 Nov 2024",
    estate: "Dream Estate Solutions",
    category: "Estate",
  },
  {
    id: 2,
    title: "Renting vs. Buying: What’s Right for You?",
    slug: "renting-vs-buying-whats-right-for-you",
    content:
      "To rent or to buy? This age-old dilemma is influenced by financial stability, lifestyle preferences, and long-term goals. This blog evaluates both options to help you make the best decision.",
    description:
      "Explore the financial implications of renting versus buying, the freedom renting provides, and the equity-building benefits of homeownership. Understand key factors like market trends, job stability, and personal preferences to find what suits you.",
    blog_image: family,
    date: "25 Nov 2024",
    category: "Consultant",
  },
  {
    id: 3,
    title: "Top 10 Upcoming Neighborhoods to Invest In",
    slug: "top-10-upcoming-neighborhoods-to-invest-in",
    content:
      "Discover the hidden gems in the real estate market! These neighborhoods are poised for significant growth in the next five years and offer attractive investment opportunities.",
    description:
      "Get detailed insights into emerging neighborhoods with rising property values, excellent infrastructure, and lifestyle amenities. Whether you're an investor or homebuyer, these areas promise a blend of affordability and growth potential.",
    blog_image: aeroPlane,
    date: "26 Nov 2024",
    consultant: "FutureFocus Realty",
    category: "Consultant",
  },
  {
    id: 4,
    title: "How to Negotiate Like a Pro When Buying a Home",
    slug: "how-to-negotiate-like-a-pro-when-buying-a-home",
    content:
      "Negotiating the price of a home can save you thousands of dollars. This blog provides actionable strategies to help you secure the best deal on your dream home.",
    description:
      "Learn effective negotiation techniques, including understanding the seller's motivation, leveraging market trends, and timing your offer perfectly. Equip yourself with tips to counteract common seller tactics and win the deal.",
    blog_image: blogCardImg1,
    date: "26 Nov 2024",
    category: "Consultant",
  },
  {
    id: 5,
    title: "5 Red Flags to Watch for During a Home Inspection",
    slug: "5-red-flags-to-watch-for-during-a-home-inspection",
    content:
      "A home inspection is your opportunity to uncover potential issues in a property. This guide highlights key red flags that could signal costly repairs or unsafe living conditions.",
    description:
      "From structural issues to hidden water damage, discover what to look out for during a home inspection. Learn how to interpret inspection reports, negotiate repairs, and decide when to walk away from a deal.",
    blog_image: blogCardImg2,
    date: "27 Nov 2024",
    estate: "InspectPro Services",
    category: "Estate",
  },
  {
    id: 6,
    title: "Understanding Mortgage Options: Fixed vs. Variable Rates",
    slug: "understanding-mortgage-options-fixed-vs-variable-rates",
    content:
      "Mortgages come in various forms, but the most common are fixed and variable rate options. This guide explores the pros and cons of each to help you choose wisely.",
    description:
      "Gain clarity on how fixed-rate mortgages provide stability while variable rates offer flexibility and potential savings. Learn how interest rate trends, your financial goals, and risk tolerance influence the right choice for you.",
    blog_image: blogCardImg3,
    date: "27 Nov 2024",
    category: "Consultant",
  },
  {
    id: 7,
    title: "The Role of Real Estate Consultants in Successful Transactions",
    slug: "role-of-real-estate-consultants-in-successful-transactions",
    content:
      "Real estate consultants can be your greatest asset when navigating complex property markets. This article explains their roles and how they add value to your transactions.",
    description:
      "Learn how consultants provide market insights, assist with property valuation, and guide negotiations. Discover their importance in reducing risks, optimizing deals, and ensuring a smooth buying or selling experience.",
    blog_image: corridor,
    date: "28 Nov 2024",
    consultant: "Prime Realty Advisors",
    category: "Consultant",
  },
  {
    id: 8,
    title: "10 Common Mistakes to Avoid When Selling Your Home",
    slug: "10-common-mistakes-to-avoid-when-selling-your-home",
    content:
      "Selling your home can be stressful, but avoiding common pitfalls can ensure a smoother process. This blog outlines errors sellers often make and how to sidestep them.",
    description:
      "From overpricing to neglecting curb appeal, learn how to present your home attractively, market effectively, and close the sale with confidence. Avoid legal missteps and streamline the selling process for maximum profit.",
    blog_image: blogCardImg1,
    date: "28 Nov 2024",
    category: "Estate",
  },
  {
    id: 9,
    title: "Eco-Friendly Homes: Why Sustainability Matters in Real Estate",
    slug: "eco-friendly-homes-sustainability-in-real-estate",
    content:
      "Sustainable homes are the future of real estate. This blog dives into the benefits of eco-friendly properties and why they’re gaining popularity among buyers.",
    description:
      "Explore how energy-efficient designs, renewable energy solutions, and sustainable materials enhance property value. Learn how choosing green homes can benefit your wallet and the environment while promoting a healthier lifestyle.",
    blog_image: family,
    date: "29 Nov 2024",
    estate: "GreenLiving Realty",
    category: "Estate",
  },
  {
    id: 10,
    title: "How to Spot a Real Estate Scam Before It’s Too Late",
    slug: "how-to-spot-a-real-estate-scam",
    content:
      "Real estate scams are on the rise, but knowing the warning signs can protect you from fraud. This article provides a comprehensive guide to identifying and avoiding scams.",
    description:
      "Learn about common real estate scams, including fake listings, title fraud, and phishing schemes. Get tips on verifying authenticity, working with trusted professionals, and securing your transactions to stay safe.",
    blog_image: aeroPlane,
    date: "29 Nov 2024",
    category: "Consultant",
  },
];

const useBlogStore = create((set) => ({
  blogs: blogs,
  setBlog: (blog) => set({ blog }),
}));

export default useBlogStore;
