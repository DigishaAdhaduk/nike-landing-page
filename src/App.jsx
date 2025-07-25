import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />

    <section className="padding-b wide:padding-r xl:px-8">
      <Hero />
    </section>

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding-x py-10">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffers />
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    <section className="padding-x py-16 sm:py-32 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
