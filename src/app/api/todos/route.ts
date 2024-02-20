import { NextRequest, NextResponse } from "next/server";
import dummyTodos from '@/data/dummy.json'

// 모든 할일 가져오기
export async function GET(request: NextRequest) {

    const response = {
        message: "단일 할일 가져오기 성공",
        data: dummyTodos
    }

    return NextResponse.json(response, { status: 200 });
}

//  할일 추가
export async function POST(request: NextRequest) {


    const { title } = await request.json()

    const newTodo = {
        id: Date.now().toString(),
        title,
        isDone: false
    }
    const response = {
        message: "할일 추가 성공",
        data: newTodo
    }

    return Response.json(response, { status: 201 });
}