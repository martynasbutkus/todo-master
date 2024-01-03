import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderInput from './components/HeaderInput';
import List from './components/List';

function App() {
  const [input, setInput] = useState('')
  const [memoryList, setMemoryList] = useState([])

  useEffect(() => {
    const list = localStorage.getItem('memory-list')
    if (list) {
      setMemoryList(JSON.parse(list))
    }
  }, [])
  

  const handleInputChange = (event) => {
    setInput(event.target.value)
  };

  const handleAddClick = () => {
    if (!input) {
      alert('Laukelis tuščias')
      return
    }

    addElement(input)
    addToMemory(input)

    setInput('')
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && input) {
      addElement(input)
      addToMemory(input)

      setInput('')
    }
  }

  const addElement = (text) => {
    const newLi = (
      <li className="list-item" key={text}>
        <div className="text">{text}</div>
        <button className="remove" onClick={() => handleRemoveClick(text)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    )
  
    setMemoryList((prevList) => [...prevList, text])
  }
  

  const addToMemory = (text) => {
    localStorage.setItem('memory-list', JSON.stringify([...memoryList, text]))
  }

  const handleRemoveClick = (text) => {
    const index = memoryList.indexOf(text)
  
    setMemoryList((prevList) => {
      const updatedList = [...prevList]
      updatedList.splice(index, 1)
      localStorage.setItem('memory-list', JSON.stringify(updatedList))
      return updatedList
    })
  } 
  

  return (
    <>
      <header>
        <h1>What you have to do?</h1>
      </header>
      <HeaderInput
        input={input}
        handleInputChange={handleInputChange}
        handleAddClick={handleAddClick}
        handleKeyPress={handleKeyPress}
      />

      <List 
        memoryList={memoryList} handleRemoveClick={handleRemoveClick}
      />

    </>
  );
}

export default App;