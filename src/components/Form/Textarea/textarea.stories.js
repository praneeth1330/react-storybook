import React from 'react'
 import Textarea from './Textarea'

export default {
  title: 'Form/AInput',
  component: Textarea
}

export const Small = () => <Textarea size='small' placeholder='Small size' />
export const Medium = () => <Textarea size='medium' placeholder='Medium size' />
export const Large = () => <Textarea size='large' placeholder='Large size' />

// Small.storyName = 'Small Textarea'