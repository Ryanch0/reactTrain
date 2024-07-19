import logo from './logo.svg';
import './App.css';
import React from 'react';


function BookDetails(props) {
  const {
    title,
    author: { firstName, lastName },
    publisher: { name: publisherName, location },
    reviews
  } = props;


return (
    <div>
      <h1>{title}</h1>
      <p>Author: {firstName} {lastName}</p>
      <p>Publisher: {publisherName}, {location}</p>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>{review.reviewer} says: "{review.comment}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// const props = {} // props라는 변수에 빈 객체{}를 할당함

// const newUser = {
//   name : "Ryan", 
//   age : 28
// }            // newUser라는 변수에 객체{name : "Ryan", age : 28}을 할당함

// props.newUser = newUser //props객체의 newUser라는 속성에 newUser변수를 할당함

// const {
//   newUser : {name},      // key point
//   newUser : {age}
// } = props           // const{ newUser : {name} }은 props객체에서 
//           //      newUser속성을 추출하고, name속성을 변수 name에 할당함

// console.log(name)
// console.log(age)


// const top10Stocks = ['삼성전자','엔비디아', '엘지전자',
//    'sk', '롯데', '삼성생명', '테슬라', '애플',  '하이미디어', 'openAI', ]

//     const [
//       stock1, stock10, ...stockRest
//     ] = top10Stocks



//     console.log(stock1) // 삼성전자
//     console.log(stockRest) // 엘지전자부터 openAI까지 담겨있는 array
//     console.log(stock10) // 엔비디아



  var object ={
    f1 : () => {
      console.log(this)
        var f2 = () => {
          console.log(this)
        }
        f2();
        setTimeout(f2, 1000)
    }
  }
  object.f1()









function App() {

  const data = {
    title : "어린왕자",
    author : {
      firstName : "Ryan",
      lastName : "Cho"
    },
    publisher : {
      name  : "Ruah",
      location : "Suwon"
    },
    reviews:[
      {reviewer : "SW", comment : "hi"},
      {reviewer : "SW2", comment : "hi2"}]
  }

  return (
     <BookDetails {...data}/>






  )
}

export default App;
