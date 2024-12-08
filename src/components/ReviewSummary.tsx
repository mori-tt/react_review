import AISummaryCard from "./AISummaryCard";

const ReviewSummary = () => {
  return (
    <div className="space-y-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
        testimonial
      </p>
      <h1 className="text-5xl font-bold leading-tight text-gray-900">
        参加者からの
        <br />
        率直なレビューを読む
      </h1>

      <AISummaryCard />
    </div>
  );
};

export default ReviewSummary;
