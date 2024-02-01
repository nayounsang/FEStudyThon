import { ReactNode } from "react";

export const BigTitle = ({ text }: { text: string }) => {
  return (
    <h1 className=" text-black text-3xl  md:text-5xl font-bold">
      <span className=" text-indigo-700">{text[0]}</span>
      {text.slice(1, text.length) + "."}
    </h1>
  );
};

interface PropType{
    children:ReactNode
}

export const H1 = ({children}:PropType) => {
    return(
        <h1 className="text-neutral-800 text-2xl">{children}</h1>
    )
}


export const H2 = ({children}:PropType) => {
  return(
      <h1 className="text-neutral-700 text-xl">{children}</h1>
  )
}

export const Body1 = ({children}:PropType) => {
  return(
      <p className="text-slate-800 text-lg">{children}</p>
  )
} 

export const Sub1 = ({children}:PropType) => {
    return(
        <p className="text-slate-500 text-base">{children}</p>
    )
} 

export const Sub2 = ({children}:PropType) => {
  return(
      <p className="text-slate-500 text-sm">{children}</p>
  )
} 
