import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  if (!category) {
    return NextResponse.json(
      { error: "Category parameter is missing" },
      { status: 400 }
    );
  }

  const fetchUrl = `https://www.googleapis.com/books/v1/volumes?q=${category}&orderBy=relevance&filter=ebooks&printType=books&startIndex=10&maxResults=30&langRestrict=en&key=${apiKey}`;

  try {
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch books" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data.items);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
