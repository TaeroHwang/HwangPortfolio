import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[color:var(--accent)]">404</h1>
        <p className="mt-4 text-xl text-foreground/80">페이지를 찾을 수 없습니다</p>
        <p className="mt-2 text-sm text-foreground/60">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/" className="px-4 py-2 rounded-md bg-[color:var(--accent)] text-white">
            홈으로 돌아가기
          </Link>
          <Link href="/#contact" className="px-4 py-2 rounded-md border border-foreground/30">
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}