/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   妙码学院官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import '@miaoma-doc/shadcn/style.css'

import { locales } from '@miaoma-doc/core'
import { useCreateMiaomaDoc } from '@miaoma-doc/react'
import { MiaomaDocView } from '@miaoma-doc/shadcn'
import { Separator } from '@miaoma-doc/shadcn-shared-ui/components/ui/separator'
import { SidebarInset, SidebarTrigger } from '@miaoma-doc/shadcn-shared-ui/components/ui/sidebar'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { SharePopover } from '@/components/SharePopover'

const pages = [
    {
        id: '1',
        name: 'Notion 与飞书文档协同方案精析，字节前端专家传授百万年薪架构师级项目重难点',
        url: '#',
        emoji: '🔭',
        links: [{ id: '', name: '服务端渲染（SSR）与前后端同构技术原理揭秘，字节前端专家带你光速进阶全栈', emoji: '🐚', url: '#' }],
    },
    {
        id: '2',
        name: 'Ant Design 组件库架构设计与开发实践，高级前端专家带你掌握基建面试技巧',
        url: '#',
        emoji: '🔦',
    },
    {
        id: '3',
        name: 'Taro、Tauri 多端开发实践与原理剖析，《Taro 多端开发权威指南》作者带你悟透多端框架原理',
        url: '#',
        emoji: '👽',
    },
    {
        id: '4',
        name: 'Nest 服务端开发与原理深度剖析，《NestJS 实战》作者带你领略框架设计之美',
        url: '#',
        emoji: '🥤',
    },
    {
        id: '5',
        name: 'Babel 与编译原理详解，字节高级前端专家带你从零实现飞书表格公式执行器',
        url: '#',
        emoji: '🚀',
    },
    {
        id: '6',
        name: '服务端渲染（SSR）与前后端同构技术原理揭秘，字节前端专家带你光速进阶全栈',
        url: '#',
        emoji: '🐚',
    },
]

export const Doc = () => {
    const params = useParams()

    const page = useMemo(() => {
        return pages.find(page => page.id === params.id)
    }, [params?.id])

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
        <SidebarInset>
            <header className="flex flex-row justify-between items-center h-[52px] px-[16px] border-b border-b-zinc-100">
                <div className="flex flex-row items-center gap-2">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div className="flex flex-row flex-auto items-center text-sm">
                        <em className="mr-2">{page?.emoji}</em>
                        <p className="overflow-hidden whitespace-nowrap max-w-[300px] text-ellipsis" title={page?.name}>
                            {page?.name}
                        </p>
                    </div>
                </div>

                <SharePopover />
            </header>
            <div className="w-[60%] mx-auto">
                <h1 className="py-12 px-[54px] leading-[3.25rem] text-4xl font-bold">
                    <span className="mr-4">{page?.emoji}</span>
                    <span>{page?.name}</span>
                </h1>
                <MiaomaDocView editor={editor} theme="light" />
            </div>
        </SidebarInset>
    )
}
