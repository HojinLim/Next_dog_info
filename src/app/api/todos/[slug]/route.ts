import { NextRequest, NextResponse } from "next/server";
import dummyTodos from '@/data/dummy.json'

//  할일 단일 조회
export async function GET(request: NextRequest,
    { params }: { params: { slug: string } }) {


    const searchParams = request.nextUrl.searchParams

    const search = searchParams.get('search')

    const response = {
        message: "단일 할일 가져오기 성공",
        data: {
            id: params.slug,
            title: '할일 1',
            isDone: false,
            query: search
        }
    }

    return NextResponse.json(response, { status: 200 });
}

//  할일 단일 삭제 id
export async function DELETE(request: NextRequest,
    { params }: { params: { slug: string } }) {

    const response = {
        message: "단일 할일 삭제 성공",
        data: {
            id: params.slug,
            title: '할일 1',
            isDone: false,

        }
    }

    return NextResponse.json(response, { status: 200 });
}

//  할일 단일 삭제 id
export async function POST(request: NextRequest,
    { params }: { params: { slug: string } }) {

    const { title, isDone } = await request.json()

    const editedTodo = {
        id: params.slug,
        title,
        isDone,
    }

    const response = {
        message: "단일 할일 수정 성공",
        data: editedTodo
    }

    return NextResponse.json(response, { status: 200 });
}