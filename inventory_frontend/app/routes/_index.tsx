import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Emma Store" },
    { name: "description", content: "Payment Serviceow!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-red-300 w-screen h-screen">
      <h1> Welcome to Emmanuel{"'"}s inventory service</h1>
    </div>
  );
}
