import type { MetaFunction } from "@remix-run/node";
import LandingPage from '../components/ui/landingpage';


export const meta: MetaFunction = () => {
  return [
    { title: "Emma Store" },
    { name: "description", content: "inventory Service!" },
  ];
};


export default function Index() {
  return (
    <div className="w-screen h-screen">
      <LandingPage />
    </div>
  );
}
