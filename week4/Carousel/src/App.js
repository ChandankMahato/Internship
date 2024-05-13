import React from 'react';
import CustomCarousel from './components/CustomCarousel'; // Import your CustomCarousel component
import logo from './logo.svg';
import './App.css';
import test1 from "./images/test1.jpg";
import test2 from "./images/test2.jpg";
import test3 from "./images/test3.webp";
import test4 from "./images/test4.jpg";
import test5 from "./images/test5.jpg";

const App = () => {
  const data = [
    {
      category: '1',
      image: test1,
      title: 'Title 1',
    },
    {
      category: '1',
      image: test2,
      title: 'Title 2',
    },
    {
      category: '1',
      image: test3,
      title: 'Title 3',
    },
    {
      category: '2',
      image: test4,
      title: 'Title 4',
    },
    {
      category: '2',
      image: test5,
      title: 'Title 1',
    },
    {
      category: '3',
      image: test1,
      title: 'Title 2',
    },
    {
      category: '3',
      image: test2,
      title: 'Title 3',
    },
    {
      category: '3',
      image: test4,
      title: 'Title 4',
    },
    {
      category: '4',
      image: test2,
      title: 'Title 2',
    },
    {
      category: '4',
      image: test4,
      title: 'Title 3',
    },
    {
      category: '4',
      image: test5,
      title: 'Title 4',
    },
    {
      category: '5',
      image: test1,
      title: 'Title 2',
    },
    {
      category: '5',
      image: test2,
      title: 'Title 3',
    },
    {
      category: '5',
      image: test5,
      title: 'Title 4',
    }
  ];
// Group data by category
  const groupedData = data.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});

  // Convert grouped data into arrays
  const carouselData = Object.values(groupedData);

  // Create CustomCarousel components for each group
  const carousels = carouselData.map((group, index) => (
    <CustomCarousel key={index} data={group} />
  ));
  return (
    <div className="App">
       {carousels}
    </div>
  );
};

export default App;
