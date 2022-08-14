import React from 'react'

interface IProps{
name: string;
}


export function Welcome(props: IProps) {

    const {name}= props
  return (
    <div>Welcome</div>
  )
}

