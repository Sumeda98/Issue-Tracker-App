'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-4'>

            <TextField.Root placeholder="Title">
                <TextField.Slot/>
            </TextField.Root>
            <TextArea placeholder="Description" />
            <Button size='3' className='cursor-pointer'>Submit New Issue</Button>

        </div>
    )
}

export default NewIssuePage