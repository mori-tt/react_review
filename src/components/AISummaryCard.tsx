import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThumbsUp, ThumbsDown, Pen } from "lucide-react";
import { mockAISummary as AISummary, mockReviews } from "@/constants/data";
import StarRating from "./StarRating";

/**
 * 平均評価を計算する関数
 * @param reviews - レビューの配列
 * @returns 平均評価（小数点以下1桁まで）
 */
const calculateAverageRating = (reviews: { rating: number }[]): number => {
  if (reviews.length === 0) return 0;

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const average = totalRating / reviews.length;

  return Math.round(average * 10) / 10;
};

const AISummaryCard = () => {
  const averageRating = calculateAverageRating(mockReviews);

  return (
    <Card className="bg-gradient-to-br border-indigo-300 from-white to-indigo-50">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">AIによるレビュー分析</CardTitle>
        <CardDescription className="text-xs">
          全レビューの総合的な洞察
        </CardDescription>
        <div className="flex items-center justify-center py-4">
          <span className="text-4xl font-bold mr-4">{averageRating}</span>
          <StarRating rating={Math.round(averageRating)} />
        </div>
      </CardHeader>
      <CardHeader className="text-center">
        <CardTitle className="text-lg">AIによるレビュー分析</CardTitle>
        <CardDescription className="text-xs">
          全レビューの総合的な洞察
        </CardDescription>
        <div className="flex items-center justify-center py-4">
          {/* <span className="text-4xl font-bold mr-4">{averageRating}</span>
          <StarRating rating={Math.round(averageRating)} /> */}
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="summary" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="summary">
              <Pen className="mr-2 h-4 w-4" /> 要約
            </TabsTrigger>
            <TabsTrigger value="positive">
              <ThumbsUp className="mr-2 h-4 w-4" /> 評価ポイント
            </TabsTrigger>
            <TabsTrigger value="negative">
              <ThumbsDown className="mr-2 h-4 w-4" /> 改善点
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="summary"
            className="text-sm leading-loose text-gray-600 dark:text-gray-400"
          >
            {AISummary.summary}
          </TabsContent>
          <TabsContent value="positive">
            {AISummary.positivePoints.map((point, index) => (
              <Badge key={index} variant="outline" className="m-1">
                {point}
              </Badge>
            ))}
          </TabsContent>
          <TabsContent value="negative">
            {AISummary.negativePoints.map((point, index) => (
              <Badge key={index} variant="destructive" className="m-1">
                {point}
              </Badge>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AISummaryCard;
