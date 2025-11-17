import Banner from "@/components/HomoUi/Banner";
import FAQ from "@/components/HomoUi/FAQ";

export default async function Home() {
  return (
    <div className="bg-neutral my-16 md:my-12">
      <Banner></Banner>
      <FAQ></FAQ>
    </div>
  );
}
