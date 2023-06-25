import { NextResponse } from 'next/server';
// import pdf from "pdf-parse";

export const runtime = 'edge';

export async function POST(req: any, res: any) {
  req.body.read();
  // pdf(req.body).then((data: any) => {
  //   // PDF text
  //   console.log(data.text);       
  // });



  return NextResponse.json({  });
}