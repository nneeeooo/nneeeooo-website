import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type SanityWebhookPayload = {
  _id?: string;
  _type?: string;
};

const documentPaths: Record<string, string[]> = {
  profile: ["/"],
  design: ["/design"],
  webdev: ["/webdev"],
};

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    console.error("Missing SANITY_REVALIDATE_SECRET");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  const { isValidSignature, body } = await parseBody<SanityWebhookPayload>(
    request,
    secret,
    true,
  );

  if (!isValidSignature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  if (!body?._id) {
    return NextResponse.json({ error: "Missing document ID" }, { status: 400 });
  }

  const docId = body._id.replace(/^drafts\./, "");
  const docType = body._type;
  const paths =
    documentPaths[docId] || (docType ? documentPaths[docType] : null);

  if (!paths) {
    return NextResponse.json({
      revalidated: false,
      reason: "Document is not mapped",
      documentId: body._id,
      documentType: docType,
    });
  }

  for (const path of paths) {
    revalidatePath(path);
  }

  if (docId === "profile" || docType === "profile") {
    revalidatePath("/", "layout");
  }

  return NextResponse.json({
    revalidated: true,
    documentId: body._id,
    paths,
  });
}
