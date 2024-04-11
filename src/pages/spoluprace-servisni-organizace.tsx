import Layout from "@/components/Layout";
import Prose from "@/components/Prose";
import Seo from "@/components/Seo";
import ServisniOrganizace from "@/components/ServisniOrganizace";

function servisniOrganizace() {
  return (
    <Layout>
      <Seo
        title="Spolupráce se servisní organizací"
        description="Lorem ipsum dolor"
      />

      <header className="flex h-[512px] w-screen items-center justify-center bg-primary-100 text-primary-900">
        <h1 className="text-center text-2xl font-bold sm:text-4xl xl:text-7xl">
          SPOLUPRÁCE SE SERVISNÍ ORGANIZACÍ
        </h1>
      </header>

      <Prose className="py-36">
        <ServisniOrganizace />
      </Prose>
    </Layout>
  );
}

export default servisniOrganizace;
