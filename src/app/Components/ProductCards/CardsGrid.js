import React from "react";
import CardComponent from "./CardComponent"; // Adjust the path if necessary

const cardData = [
    {
        image: "https://cdn.dribbble.com/userupload/17362031/file/original-b1572e728eae06c56f68553158b378c9.jpg?format=webp&resize=400x300&vertical=center",
        title: "Services Providing Landing Page",
        category: "Mobile App",
        licience: "Free",
    },
    {
        image: "https://cdn.dribbble.com/userupload/11761975/file/still-ab0217c99005fbcf06959ce59d1c231c.png?format=webp&resize=400x300&vertical=center",
        title: "Card 2",
        category: "Mobile App",
        licience: "Free",
    },
    {
        image: "https://www.shutterstock.com/shutterstock/photos/2297499095/display_1500/stock-vector-file-manager-app-ui-editable-template-2297499095.jpg",
        title: "Card 3",
        category: "Mobile App",
        licience: "Free",
    },
    {
        image: "https://www.shutterstock.com/shutterstock/photos/2299470925/display_1500/stock-vector-music-dashboard-website-template-editable-and-vector-2299470925.jpg",
        title: "Card 4",
        category: "Web Template",
        licience: "Free",
    },
    {
        image: "https://cdn.dribbble.com/userupload/17362031/file/original-b1572e728eae06c56f68553158b378c9.jpg?format=webp&resize=400x300&vertical=center",
        title: "Services Providing Landing Page",
        category: "Mobile App",
        licience: "Free",
    },
    {
        image: "https://cdn.dribbble.com/userupload/11761975/file/still-ab0217c99005fbcf06959ce59d1c231c.png?format=webp&resize=400x300&vertical=center",
        title: "Card 2",
        category: "Mobile App",
        licience: "Free",
    },
    {
        image: "https://www.shutterstock.com/shutterstock/photos/2297499095/display_1500/stock-vector-file-manager-app-ui-editable-template-2297499095.jpg",
        title: "Card 3",
        category: "Mobile App",
        licience: "Free",
    },
    {
        image: "https://www.shutterstock.com/shutterstock/photos/2299470925/display_1500/stock-vector-music-dashboard-website-template-editable-and-vector-2299470925.jpg",
        title: "Card 4",
        category: "Web Template",
        licience: "Free",
    },
];

const CardsGrid = () => {
    return (
        <div className="container app-bg-Dark mt-60 mb-60">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {cardData.map((card, index) => (
                    <div className="col" key={index}>
                        <CardComponent
                            image={card.image}
                            title={card.title}
                            category={card.category}
                            licience={card.licience}
                        />
                    </div>
                ))}
            </div>
            <div className="text-center mt-28">
                <button className="gradient-btn view-more-btn">View More</button>
            </div>

        </div>
    );
};

export default CardsGrid;
