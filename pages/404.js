import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>Sorry</h1>
      <p>We can&apos;t find a page.</p>
      <Link href='/'>
        <button>GO BACK</button>
      </Link>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 120px;
        }
        p {
          margin: 10px 0 30px;
        }
        button {
          background: #222;
          outline: none;
          border: none;
          cursor: pointer;
          padding: 10px 20px;
          color: #fff;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
