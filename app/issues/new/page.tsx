'use client';
import dynamic from 'next/dynamic';
// import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { Button, TextField } from '@radix-ui/themes';
import React from 'react';

const SimpleMdeEditor = dynamic(() => import('react-simplemde-editor'), {
  ssr: false
});

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='Title' />
      </TextField.Root>
      <SimpleMdeEditor placeholder='Description' />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
