export default function getMockState() {
  return {
    productsSlice: [
      {
        image: {
          thumbnail: "/images/image-meringue-thumbnail.jpg",
          mobile: "/images/image-meringue-mobile.jpg",
          tablet: "/images/image-meringue-tablet.jpg",
          desktop: "/images/image-meringue-desktop.jpg",
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0,
        quantity: 2,
      },
      {
        image: {
          thumbnail: "/images/image-cake-thumbnail.jpg",
          mobile: "/images/image-cake-mobile.jpg",
          tablet: "/images/image-cake-tablet.jpg",
          desktop: "/images/image-cake-desktop.jpg",
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5,
        quantity: 1,
      },
    ],
  };
}
