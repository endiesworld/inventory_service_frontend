import type { MetaFunction } from "@remix-run/node";
import Wrapper from '../components/wrapper' ;
import Products from '../components/products';

export const meta: MetaFunction = () => {
  return [
    { title: "Emma Store" },
    { name: "description", content: "Payment Serviceow!" },
  ];
};

export default function Index() {
  return (
    <div className="w-screen h-screen">
      <Wrapper>
        <Products />
      </Wrapper>
    </div>
  );
}
