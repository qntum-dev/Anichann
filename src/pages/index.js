import MainDisplay from "@/components/MainDisplay";

export default function Home() {
  return (
    <>
      {/* <Layout>
        <div>
          <div className="grid md:grid-cols-12 m-12 gap-4">
            <div className="md:col-span-3 min-h-[400px] bg-purple-600"></div>

            <div className="md:col-span-6 min-h-[400px] flex flex-col bg-orange-600 gap-4">
              <div className="min-h-[200px] bg-blue-300"></div>
              <div className="min-h-[200px] bg-green-800"></div>
            </div>

            <div className="md:col-span-3 col-span-full min-h-[100px] bg-red-950"></div>
          </div>
        </div>
      </Layout> */}
        {/* <Display/> */}
        <MainDisplay/>
    </>
  );
}
