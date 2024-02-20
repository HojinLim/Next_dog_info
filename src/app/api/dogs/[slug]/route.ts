
import { NextRequest, NextResponse } from "next/server";

// https://dog.ceo/api/breed/affenpinscher/images/random
//  할일 단일 조회
export async function GET(request: NextRequest,
    { params }: { params: { slug: string } }) {

    // https://dog.ceo/api/breed/affenpinscher/images/random

    let response
    try {
        // API 엔드포인트를 동적으로 생성합니다.
        const apiUrl = `https://dog.ceo/api/breed/${params.slug}/images/random`;
        console.log(apiUrl)
        // API에 GET 요청을 보냅니다.
        response = await fetch(apiUrl);

        // 응답이 성공적인지 확인합니다.
        if (response.ok) {
            // JSON 형식으로 응답을 해석합니다.
            const responseData = await response.json();

            // 데이터를 반환합니다.
            return NextResponse.json(responseData);
        } else {
            // 응답이 실패한 경우 오류 메시지를 반환합니다.
            return NextResponse.json(response, { status: 400 })
        }
    } catch (error) {
        // 요청 과정에서 오류가 발생한 경우 오류 메시지를 반환합니다.
        return NextResponse.json(response, { status: 400 })
    }


}

