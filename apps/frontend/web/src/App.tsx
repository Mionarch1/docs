/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   妙码学院官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import './App.css'

import { locales } from '@miaoma-doc/core'
import { useCreateMiaomaDoc } from '@miaoma-doc/react'
import { useEffect } from 'react'

function App() {
    const editor = useCreateMiaomaDoc({
        dictionary: locales.zh,
    })
    console.log('🚀 ~ App ~ editor:', editor)

    useEffect(() => {
        editor.onChange(value => {
            console.log(value)
        })
    }, [editor])

    return (
        <>
            <h1>妙码协同文档 | 妙码学院</h1>
            {/* <MiaomaDocView editor={editor} /> */}
        </>
    )
}

export default App
