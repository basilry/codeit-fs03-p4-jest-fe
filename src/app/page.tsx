'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Button label="버튼" onClick={handleButtonClick} />
      <Input
        placeholder="Enter text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  )
}
