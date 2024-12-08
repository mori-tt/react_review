import Footer from "./components/Footer";
import ReviewList from "./components/ReviewList";

const SummarySection = () => {
  return (
    <div className="w-2/5 h-full overflow-hidden pl-20">
      {/* <ReviewSummary /> */}
    </div>
  );
};

const ReviewListSection = () => {
  return (
    <div className="w-3/5 h-full overflow-y-auto pr-20">
      <ReviewList />
    </div>
  );
};

function App() {
  return (
    <>
      <div className="h-[calc(100vh-68px)] flex gap-12 pt-12">
        <SummarySection />
        <ReviewListSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
