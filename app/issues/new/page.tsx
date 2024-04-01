'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-4'>

            <TextField.Root placeholder="Title">
                <TextField.Slot />
            </TextField.Root>
            <SimpleMDE placeholder="Description" />
            <Button size='3' className='cursor-pointer'>Submit New Issue</Button>

        </div>
    )
}

export default NewIssuePage