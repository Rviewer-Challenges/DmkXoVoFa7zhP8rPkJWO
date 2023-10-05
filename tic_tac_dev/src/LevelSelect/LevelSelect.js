import React from 'react'

export default function LevelSelect({onSelectLevel}) {
  return (
    <div>
    <h2>Select Difficulty:</h2>
    <button onClick={() => onSelectLevel("easy")}>Easy</button>
    <button onClick={() => onSelectLevel("medium")}>Medium</button>
    <button onClick={() => onSelectLevel("difficult")}>Difficult</button>
  </div>
  )
}
