import React from 'react';
import { useState } from 'react';


const App = () => {

  return (
    <div className='max-w-4xl w-full p-3 grid gap-3'>
      <h1 className='text-center font-bold text-4xl'>Text Expander</h1>
      <div className='grid gap-3'>
        <TextExpander>
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science fiction,
          but believe it or not, space travel is a real thing. Humans and robots
          are constantly venturing out into the cosmos to uncover its secrets and
          push the boundaries of what's possible.
        </TextExpander>
        <TextExpander
          collapsedNumWords={20}
          expandButtonText='Show text'
          collapseButtonText='Collapse text'
          buttonColor='#ff6622'
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans stepped
          foot on the moon or when rovers were sent to roam around on Mars.
        </TextExpander>
        <TextExpander expanded={true} className='box'>
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what we'll
          discover next!
        </TextExpander>
      </div>
    </div>
  );
};

export default App;

interface ITextExpanderProps {
  children: React.ReactNode;
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
}


const TextExpander = (
  {
    children,
    collapsedNumWords = 20,
    expandButtonText = 'Show more',
    collapseButtonText = 'Show less',
    buttonColor = '#1f09cd',
    expanded = false,
    className = '',
  }: ITextExpanderProps) => {
  const [toggle, setToggle] = useState<boolean>(expanded);

  return (
    <div className={`border-2 bg-white rounded p-3 ${className}`}>
<span>
  {toggle 
    ? children 
    : typeof children === 'string' 
      ? children.split(' ').slice(0, collapsedNumWords).join(' ') + '...' 
      : children}
</span>
      <button className='btn ml-1' onClick={() => setToggle(v => !v)}>
        {toggle ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};